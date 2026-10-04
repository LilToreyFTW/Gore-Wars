import bpy, math, os, re
from mathutils import Vector
OUT=os.path.abspath(os.path.join(os.path.dirname(__file__),'..','assets','items'))
ITEMS=[('Compact sidearm','pistol'),('9mm shell pack','ammo'),('Field armor plate','armor'),('Harbor lockpick','lockpick'),('Utility case','case'),('Work gloves','gloves'),('Blackharbor keepsake','coin'),('Personal accessory','card'),('Gift parcel','parcel'),('Travel provision kit','kit'),('Performance component','component'),('Cargo case','case'),('Service token','coin'),('Courier parcel','parcel'),('Records access pass','card'),('Market listing credit','card'),('Appraisal voucher','card'),('Trade seal','coin'),('Secure document packet','card'),('Property viewing pass','card'),('Vault seal','coin')]
def slug(s):return re.sub(r'[^a-z0-9]+','-',s.lower()).strip('-')
def M(n,c,metal=0,rough=.35):
 m=bpy.data.materials.new(n);m.diffuse_color=(*c,1);m.use_nodes=True;b=m.node_tree.nodes.get('Principled BSDF');b.inputs['Base Color'].default_value=(*c,1);b.inputs['Metallic'].default_value=metal;b.inputs['Roughness'].default_value=rough;return m
BLACK=M('Gunmetal',(.02,.03,.04),.8,.24);RED=M('Gore Red',(.55,.01,.02),.35,.25);STEEL=M('Steel',(.2,.25,.3),.9,.2);RUBBER=M('Rubber',(.01,.012,.015),.05,.65);PAPER=M('Paper',(.5,.35,.2),0,.6);GOLD=M('Brass',(.6,.25,.04),.85,.22);BLUE=M('Signal',(.02,.15,.4),.5,.28);GREEN=M('Supply',(.05,.35,.12),.3,.3)
def cube(n,l,s,m,b=.08):
 bpy.ops.mesh.primitive_cube_add(location=l);o=bpy.context.object;o.name=n;o.scale=s;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);q=o.modifiers.new('Bevel','BEVEL');q.width=b;q.segments=3;o.data.materials.append(m);return o
def cyl(n,l,r,d,m,rot=(0,0,0)):
 bpy.ops.mesh.primitive_cylinder_add(vertices=48,radius=r,depth=d,location=l,rotation=rot);o=bpy.context.object;o.name=n;o.data.materials.append(m);q=o.modifiers.new('Bevel','BEVEL');q.width=.04;q.segments=2;return o
def tor(l,maj,minr,m):bpy.ops.mesh.primitive_torus_add(major_radius=maj,minor_radius=minr,major_segments=48,minor_segments=12,location=l);bpy.context.object.data.materials.append(m)
def clear():bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
def build(k):
 if k=='pistol':cube('Slide',(0,0,1.2),(1.1,.24,.15),BLACK);cube('Grip',(-.45,0,.65),(.25,.22,.6),RUBBER);cyl('Barrel',(1.15,0,1.2),.1,.8,STEEL,(0,math.pi/2,0))
 elif k=='ammo':cube('Box',(0,0,.7),(.75,.55,.55),RED);[cyl('Round',(x,0,1.3),.1,.5,GOLD) for x in(-.35,-.12,.12,.35)]
 elif k=='armor':cube('Plate',(0,0,.85),(.85,.22,1.05),BLACK,.16);cube('Stripe',(0,-.24,.85),(.55,.03,.1),RED,.02)
 elif k=='lockpick':[cyl('Pick',(x,0,.8),.04,1.8,STEEL,(0,math.pi/2,0)) for x in(-.35,-.12,.12,.35)];tor((.55,0,.8),.25,.06,GOLD)
 elif k=='case':cube('Case',(0,0,.75),(1,.65,.7),BLACK,.13);tor((0,0,1.5),.35,.06,STEEL)
 elif k=='gloves':[cube('Glove',(x,0,.65),(.32,.18,.55),RUBBER,.12) for x in(-.4,.4)]
 elif k=='coin':cyl('Coin',(0,0,.8),.75,.14,GOLD,(math.pi/2,0,0));tor((0,-.08,.8),.58,.07,RED)
 elif k=='card':cube('Card',(0,0,.7),(.9,.06,.58),BLUE,.08);cube('Stripe',(0,-.08,.85),(.7,.02,.08),GOLD,.01)
 elif k=='parcel':cube('Parcel',(0,0,.75),(.7,.7,.7),PAPER);cube('Ribbon',(0,-.72,.75),(.1,.03,.7),RED,.02)
 elif k=='kit':cube('Kit',(0,0,.75),(.9,.55,.7),GREEN);tor((0,0,1.45),.3,.05,STEEL)
 elif k=='component':cyl('Component',(0,0,.75),.55,.7,STEEL);[cyl('Fin',(0,0,.75),.75,.08,RED,(0,math.pi/2,i*math.pi/3)) for i in range(3)]
def setup():
 s=bpy.context.scene;s.render.engine='BLENDER_EEVEE';s.render.resolution_x=512;s.render.resolution_y=512;s.render.resolution_percentage=100;s.render.image_settings.file_format='PNG';s.world.color=(.005,.008,.012);bpy.ops.object.camera_add(location=(4,-6,3));cam=bpy.context.object;s.camera=cam;cam.rotation_euler=(Vector((0,0,.8))-cam.location).to_track_quat('-Z','Y').to_euler()
 for loc,en,col in[((-4,-4,6),1100,(1,.05,.03)),((4,-2,4),900,(.05,.2,1)),((0,3,5),700,(1,.25,.1))]:bpy.ops.object.light_add(type='AREA',location=loc);l=bpy.context.object;l.data.energy=en;l.data.color=col;l.data.size=4;l.rotation_euler=(Vector((0,0,.6))-l.location).to_track_quat('-Z','Y').to_euler()
 cube('Ground',(0,0,-.1),(3,3,.1),M('Ground',(.01,.015,.02),.1,.5),.02)
for name,k in ITEMS:
 clear();setup();build(k);bpy.ops.object.select_all(action='SELECT');bpy.ops.object.shade_smooth();bpy.context.scene.render.filepath=os.path.join(OUT,slug(name)+'.png');bpy.ops.render.render(write_still=True)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'gore-wars-shop-assets.blend'))
print('DONE',len(ITEMS))

