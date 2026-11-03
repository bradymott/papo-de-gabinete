from PIL import Image, ImageDraw
COBALT=(29,76,158); WHITE=(255,255,255); IPE=(242,177,11); DEEP=(20,55,114)
def quarter(d, x, y, t, corner, color):
    # quarter disc of radius t anchored at a tile corner; tile at (x,y) size t
    cx = x if corner in ("tl","bl") else x+t
    cy = y if corner in ("tl","tr") else y+t
    start = {"tl":0,"tr":90,"br":180,"bl":270}[corner]
    d.pieslice([cx-t, cy-t, cx+t, cy+t], start, start+90, fill=color)
def icon(S=1024, inset=0.17, variant=0, bg=COBALT):
    big = S*4
    im = Image.new("RGB",(big,big),bg); d = ImageDraw.Draw(im)
    m = int(big*inset); t = (big-2*m)//2
    layouts = [
      [("br",WHITE),("bl",WHITE),("tr",WHITE),("tl",IPE)],
      [("br",WHITE),("tr",WHITE),("bl",WHITE),("tl",IPE)],
      [("tl",WHITE),("br",IPE),("br",WHITE),("tl",WHITE)],
    ][variant]
    cells=[(0,0),(1,0),(0,1),(1,1)]
    for (cx,cy),(corner,col) in zip(cells,layouts):
        x=m+cx*t; y=m+cy*t
        quarter(d,x,y,t,corner,col)
    # small accent dot like a speech mark
    return im.resize((S,S), Image.LANCZOS)
if __name__=="__main__":
    import sys
    out = Image.new("RGB",(3*360+40,380),(200,200,200))
    for v in range(3):
        ic = icon(1024,0.17,v).resize((360,360), Image.LANCZOS)
        mask = Image.new("L",(360,360),0); ImageDraw.Draw(mask).rounded_rectangle([0,0,359,359],radius=80,fill=255)
        out.paste(ic,(10+v*370,10),mask)
    out.save(sys.argv[1])
