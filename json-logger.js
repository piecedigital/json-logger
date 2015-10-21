// an object with nested data
var object = {
	text1: "text1",
	object1: {
		obj1: {
		},
		obj2: {
		},
		obj3: {
		}
	},
	text2: "text2",
	text3: "text3",
	object3: {
		obj1: {
		},
		obj2: {
			obj1: {
			},
			obj2: {
			},
			obj3: {
				obj1: {
				},
				obj2: {
				},
				obj3: {
					obj1: {
					},
					obj2: {
					},
					obj3: {
					}
				}
			}
		},
		obj3: {}
	},
	text4: "text4",
	object4: {
		obj1: {
		},
		obj2: {
		},
		obj3: {
		}
	},
	text5: "text5",
	text6: "text6",
	object6: {
		obj1: {
		},
		obj2: {
		},
		obj3: {
		}
	},
	text7: "text7",
	object7: {
		obj1: {
		},
		obj2: {
		},
		obj3: {
		}
	}
};

// this function will loop through the object recursively and
var jsonLogger = function(obj, level, line) {
	// adds multiply prototype method, to assure it exist
	if(!("pd_multiply" in String.prototype)) {
		console.log("added pd_multiply");
		String.prototype.pd_multiply = function(times) {
			var arr = [];
			var tick = 0;
			while(tick < times) {
				arr.push(this);
				tick++;
			}

			return arr.join("");
		};
	}

	var data = obj, level = level || 1, line =  line || 1;

	for(var key in data) {
		// if the type of value on the current key is equal to "object"
		if(typeof data[key] === "object") {
			// ... log braces and they key
			console.log(line +":", " ".pd_multiply(level-1) + key + " {");
			line++;
			// ... then call jsonLogger, passing the object in the current key,
			// ... and passing the next level, for formatting
			line = jsonLogger(data[key], level+1, line);
			console.log(line +":", " ".pd_multiply(level-1) + "}");
			line++;
		} else {
			// ... if not an object, simply log the key and value
			console.log(line, key + ": " + data[key]);
			line++;
		}
	}
	return line;
}

jsonLogger(object);

// created by me :)
var creator ={};
var info = creator;
info.name = "Darryl Dixon";
info.twitter = "@PieceDigital";
info.website = "piecedigital.github.io";
info.linkedin = "linkedin.com/in/pdstudios";

console.log("\n\\--------------*Credits*--------------/\n")
jsonLogger(creator);