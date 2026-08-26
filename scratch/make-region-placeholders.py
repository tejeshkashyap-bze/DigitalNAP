# Abstract, clearly non-photographic placeholders for the region hero figures.
# BZE palette, flat diagrammatic geometry, labelled as a placeholder.
from PIL import Image, ImageDraw, ImageFont
import os, hashlib, struct

W, H = 1200, 900
WASH  = (243, 248, 252)
LINE  = (219, 230, 238)
BLUE  = (18, 124, 191)
DEEP  = (13, 90, 140)
LIGHT = (62, 156, 211)
INK   = (16, 34, 46)
INK3  = (125, 143, 154)

FONTDIR = "/usr/share/fonts/truetype/dejavu"
def font(sz, bold=False):
    return ImageFont.truetype(os.path.join(
        FONTDIR, "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"), sz)

def mix(a, b, t):
    t = max(0.0, min(1.0, t))
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))

def rng(key):
    """Deterministic per-region stream — same region, same picture, forever."""
    def r(n):
        h = hashlib.md5(f"{key}:{n}".encode()).digest()
        return struct.unpack("<I", h[:4])[0] / 2**32
    return r

REGIONS = [("port-hedland", "Port Hedland"), ("kwinana", "Kwinana"),
           ("gladstone", "Gladstone"), ("hunter-valley", "Hunter Valley")]

for key, name in REGIONS:
    r = rng(key)
    img = Image.new("RGB", (W, H), WASH)
    d = ImageDraw.Draw(img)

    for y in range(H):                                   # sky wash
        d.line([(0, y), (W, y)], fill=mix((255, 255, 255), WASH, (y / H) ** 1.25))

    horizon = int(H * 0.74)

    # distant band — pale, low, read as depth rather than detail
    x, i = -60, 0
    while x < W + 60:
        w = 70 + int(r(i) * 150)
        h = 30 + int(r(i + 1) ** 1.8 * 230)
        tone = mix(LIGHT, WASH, 0.40 + r(i + 2) * 0.40)
        d.rectangle([x, horizon - h, x + w, horizon], fill=tone)
        if r(i + 3) > 0.70:
            sx = x + w // 2
            d.rectangle([sx - 6, horizon - h - 70 - int(r(i+4)*60), sx + 6, horizon - h],
                        fill=tone)
        x += w + 10 + int(r(i + 5) * 40)
        i += 6

    # foreground — brand blues, taller and more varied
    x, i = -50, 500
    while x < W + 50:
        w = 80 + int(r(i) * 160)
        h = 50 + int(r(i + 1) ** 1.5 * 330)
        tone = mix(BLUE, DEEP, r(i + 2))
        d.rectangle([x, horizon - h, x + w, horizon + 6], fill=tone)
        pick = r(i + 3)
        if pick > 0.62:                                   # storage tank
            rad = max(18, min(w, h) // 3)
            cx, cy = x + w // 2, horizon - h - rad + 4
            d.ellipse([cx - rad, cy - rad, cx + rad, cy + rad],
                      fill=mix(tone, (255, 255, 255), 0.22))
        elif pick > 0.38:                                 # stack
            sx = x + w // 3
            sh = 90 + int(r(i + 4) * 160)
            d.rectangle([sx - 9, horizon - h - sh, sx + 9, horizon - h], fill=tone)
        else:                                             # gantry
            d.rectangle([x + 6, horizon - h - 22, x + w - 6, horizon - h - 8], fill=tone)
        x += w + 16 + int(r(i + 5) * 60)
        i += 6

    d.rectangle([0, horizon + 6, W, H], fill=mix(DEEP, INK, 0.40))

    d.text((64, H - 152), name, font=font(58, bold=True), fill=(255, 255, 255))
    d.text((64, H - 76), "PLACEHOLDER IMAGE — NO PHOTOGRAPH YET",
           font=font(20), fill=mix((255, 255, 255), INK3, 0.40))

    d.rectangle([0, 0, W - 1, H - 1], outline=LINE)
    img.save(f"regions/{key}.png", optimize=True)
    print(key, os.path.getsize(f"regions/{key}.png") // 1024, "KB")
