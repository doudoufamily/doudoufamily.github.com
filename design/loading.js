(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1000,
	fps: 30,
	color: "#F6E7CE",
	manifest: []
};



// symbols:



(lib.scene_1_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6E7CE").s().p("Egx/BOHMAAAicOMBj+AAAMAAACcOg");
	this.shape.setTransform(320,500);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1000);


(lib._mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D25F5E").s().p("AgqBQQgWgIgIgKQgIgKgEgLQgEgMAAgMQAAgeAWgeQALgPAIgJQAJgIAHgEQANgGAIgBIAQgBQAOAAAYAFQASAGAIAMQAJALAFAPQAFAOAAANQAAAKgCAFQgCAHgEAFQgHAKgJAGQgKAHgIAAQgJAAgGgJQgCAIgJAFQgJAEgLAAQgMAAgLgGQgLgFgDgIQgCgIAAgIQAAgJACgFQACgIAEgIQAEgHAFgFQAFgEAGgCQANgGANAAQAQAAADAJIAJAQQADAHAAAIIgBAIIgEAMQAFAEAGAAQAIAAAFgKQAFgKAAgMQAAgPgGgOIgGgMQgEgFgEgDQgJgHgJgCQgJgDgJAAQgfAAgeAeQgPAPgIAPQgIAOAAAPIABAHIAEAOQACAGAFAFQAGAFAKAEQAKAEALACQALACANAAQANAAANgCQANgDAKgGIAQgJQAGgCAGAAIAGAAIgDACIgHANQgGALgTAJQgJAEgKACQgLACgLAAQgXAAgWgIgAADgbQgFACgGAEQgFAFgDAHIgHAUQgBAFAEAHQAFAHAFACQAFACAEAAQAHAAAJgIQAIgIACgGIADgJIAAgEQAAgLgHgIQgHgHgIAAg");
	this.shape.setTransform(8.9,8.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.9,17.8);


(lib._mc_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D25F5E").s().p("AgNBiIAAgcIAZAAIAAAcgAgMAwQAAgPACgJQADgJAFgHQACgHANgLQANgNADgGQAEgGAAgLQAAgGgCgFQgCgGgEgEQgJgJgQAAQghAAAAAqIgYAAQAAgTAEgKQAEgKAJgIQAJgIALgEQALgEAKAAQANAAAKAEQAKADAIAIQAQAOAAAYQAAALgEAJQgEAJgOANIgSAQQgEAGgCAIQgDAHABANg");
	this.shape.setTransform(5.9,9.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.8,19.7);


(lib._mc_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D25F5E").s().p("AAAARIgWAhIgQgMIAXggIgmgKIAHgUIAlAOIAAgnIASAAIAAAnIAlgOIAIAUIgmAKIAYAgIgSAMg");
	this.shape.setTransform(5.5,5.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.9,10.1);


(lib._mc_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D25F5E").s().p("AAEBcIAHg4IgfAAIgIA4IgSAAIAIg4IgcAAIACgSIAcAAIAFgkIgcAAIADgRIAcAAIAIg4IASAAIgIA4IAfAAIAIg4IASAAIgIA4IAcAAIgDARIgcAAIgEAkIAbAAIgCASIgcAAIgIA4gAgSASIAgAAIAEgkIgfAAg");
	this.shape.setTransform(6.8,9.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,18.6);


(lib._mc_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D25F5E").s().p("Ag6BNIAOgYIAXANIgPAYgAgdAoIAihKIAfg3IAXANIggA3IgtBEg");
	this.shape.setTransform(6,9.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.9,18.2);


(lib.loading_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib._mc_4();
	this.instance.setTransform(11,9.1,1,1,0,0,0,6,9.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({rotation:360,guide:{path:[11,8.7,-23.7,8.7,-48.2,33.3,-56.3,41.4,-61.8,50.7,-72.8,69.4,-72.8,92.5,-72.8,127.2,-48.2,151.8,-23.6,176.4,11,176.4,45.7,176.4,70.3,151.8,94.9,127.2,94.9,92.5,94.9,57.9,70.3,33.3,54.1,17,33.5,11.5,25.2,9.3,16.3,8.8]}},29).to({_off:true},1).wait(26));

	// Layer 4
	this.instance_1 = new lib._mc_1();
	this.instance_1.setTransform(11,9,1,1,0,0,0,5.9,9.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({rotation:360,guide:{path:[11,8.7,-23.7,8.7,-48.2,33.3,-56.3,41.4,-61.8,50.7,-72.8,69.4,-72.8,92.5,-72.8,127.2,-48.2,151.8,-23.6,176.4,11,176.4,45.7,176.4,70.3,151.8,94.9,127.2,94.9,92.5,94.9,57.9,70.3,33.3,54.1,17,33.5,11.5,25.2,9.3,16.3,8.8]}},29).to({_off:true},1).wait(21));

	// Layer 5
	this.instance_2 = new lib._mc_2();
	this.instance_2.setTransform(11,9,1,1,0,0,0,5.5,5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({rotation:360,guide:{path:[11,8.7,-23.7,8.7,-48.2,33.3,-56.3,41.4,-61.8,50.7,-72.8,69.4,-72.8,92.5,-72.8,127.2,-48.2,151.8,-23.6,176.4,11,176.4,45.7,176.4,70.3,151.8,94.9,127.2,94.9,92.5,94.9,57.9,70.3,33.3,54.1,17,33.5,11.5,25.2,9.3,16.3,8.8]}},29).to({_off:true},1).wait(16));

	// Layer 6
	this.instance_3 = new lib._mc_3();
	this.instance_3.setTransform(11,9,1,1,0,0,0,6.8,9.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({rotation:360,guide:{path:[11,8.7,-23.7,8.7,-48.2,33.3,-56.3,41.4,-61.8,50.7,-72.8,69.4,-72.8,92.5,-72.8,127.2,-48.2,151.8,-23.6,176.4,11,176.4,45.7,176.4,70.3,151.8,94.9,127.2,94.9,92.5,94.9,57.9,70.3,33.3,54.1,17,33.5,11.5,25.2,9.3,16.3,8.8]}},29).to({_off:true},1).wait(11));

	// Layer 7
	this.instance_4 = new lib._mc();
	this.instance_4.setTransform(10.9,9,1,1,0,0,0,8.9,8.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({rotation:360,guide:{path:[11,8.7,-23.7,8.7,-48.2,33.3,-56.3,41.4,-61.8,50.7,-72.8,69.4,-72.8,92.5,-72.8,127.2,-48.2,151.8,-23.6,176.4,11,176.4,45.7,176.4,70.3,151.8,94.9,127.2,94.9,92.5,94.9,57.9,70.3,33.3,54.1,17,33.5,11.5,25.2,9.3,16.3,8.8]}},29).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.7,21.9,19.5);


(lib.scene_0 = function() {
	this.initialize();

	// bar
	this.instance = new lib.loading_mc();
	this.instance.setTransform(313.2,313.8,1,1,0,0,0,10.9,9.8);

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D25F5E").s().p("ATADTIAAgjIgjAAIAAgjIgjAAIAAkZIAjAAIAAAkIAjAAIAAgkIAkAAIAAgjIgkAAIAAgjIE/AAIAAAjIAiAAIAAAjIgiAAIAAAkIixAAIAACuIBqAAIAAgjIgjAAIAAgjIgkAAIAAgiIAkAAIAAgjIBqAAIAAAjIAiAAIAACvIgiAAIAAAjIgkAAIAAAjgAPKDTIAAgjIgjAAIAAiNIgkAAIAAgjIgjAAIAACwIgkAAIAAAjIiNAAIAAgjIgjAAIAAlfIAjAAIAABIIAjAAIAAglIAjAAIAAglIhGAAIAAghICNAAIAAAjIAkAAIAABHIAjAAIAAAjIAkAAIAAhqIAjAAIAAgjIBHAAIAAAjIAjAAIAAFfIgjAAIAAAjgAGVDTIAAgjIgjAAIAAlfIAiAAIAABIIAkAAIAAgnIAjAAIAAgjIhGAAIAAghICOAAIAAAjIAjAAIAAFfIgjAAIAAAjgAhXDTIAAgjIgjAAIAAlfIAhAAIAABIIAkAAIAAglIAkAAIAAglIhGAAIAAghIEZAAIAAAjIAjAAIAAAjIAjAAIAAAkIAjAAIAAD1IgjAAIAAAjIgjAAIAAAjgABYBGIBHAAIAAgjIAjAAIAAhoIgjAAIAAgjIhHAAgAkHDTIAAgjIgjAAIAAiNIhqAAIAACNIgjAAIAAAjIiOAAIAAgjIgjAAIAAk8IAjAAIAAAkIAjAAIAAgkIAkAAIAAgjIgkAAIAAgjIEbAAIAAAjIAkAAIAAAjIAiAAIAAE8IgiAAIAAAjgAmUhFIBqAAIAAgjIhqAAgAwQDTIAAgjIgjAAIAAgjIgjAAIAAkZIAjAAIAAAkIAjAAIAAgkIAkAAIAAgjIgkAAIAAgjIEbAAIAAAjIAkAAIAAAjIAjAAIAAEZIgjAAIAAAjIgkAAIAAAjgAuCBGIBqAAIAAiuIhqAAgA3+DTIAAgjIgiAAIAAlfIAgAAIAABIIAlAAIAAgnIAlAAIAAgjIhIAAIAAghICOAAIAAAjIAjAAIAAD1ICOAAIAAAjIAjAAIAABHIgjAAIAAAjg");
	this.shape.setTransform(315.5,525.4);

	// scene_1_bg
	this.bg_mc = new lib.scene_1_bg();

	this.addChild(this.bg_mc,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1000);


// stage content:
(lib.loading = function() {
	this.initialize();

	// scene
	this.scene_1 = new lib.scene_0();

	this.addChild(this.scene_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(320,500,640,1000);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;