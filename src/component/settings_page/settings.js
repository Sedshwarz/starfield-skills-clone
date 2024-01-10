const optionAry1 = ["on","off"],
optionAry2 = ["low","medium","high"],
optionAry3 = ["very easy","easy","normal","hard","very hard"],
optionAry4 = ["5 mins","10 mins","30 mins","45 mins"],
optionAry5 = ["low","medium","high","custom"],
optionAry6 = ["cas","fsr2"];

export const optionsAry = [optionAry1,optionAry2,optionAry3,optionAry4,optionAry5,optionAry6,"nopt","nopt2"];

export const bindingNames = [
    {
        normalName: "Escape",
        targetName: "ESC"
    },
    {
        normalName: " ",
        targetName: "SPACE"
    },
    {
        normalName: "CapsLock",
        targetName: "CAPS LOCK"
    },
    {
        normalName: "Control",
        targetName: "CTRL"
    },
    {
        normalName: "AltGraph",
        targetName: "ALT GR"
    },
    {
        normalName: "click1",
        targetName: "MOUSE1"
    },
    {
        normalName: "click2",
        targetName: "MOUSE2"
    },
    {
        normalName: "click3",
        targetName: "MOUSE3"
    },
    {
        normalName: "click4",
        targetName: "MOUSEWHEELUP"
    },
    {
        normalName: "click5",
        targetName: "MOUSEWHEELDOWN"
    },
    {
        normalName: "ArrowUp",
        targetName: "UP"
    },
    {
        normalName: "ArrowDown",
        targetName: "DOWN"
    },
    {
        normalName: "ArrowLeft",
        targetName: "LEFT"
    },
    {
        normalName: "ArrowRight",
        targetName: "RIGHT"
    }
];

export const SettingsAry = [
    {
        title: "gameplay",
        options: [
            {
                id: 1,
                optionTitle: "Difficulty",
                defination: "All Difficulty levels affect damage and the chance to encounter Legendary enemies.",
                valueType: 2,
                value: "normal",
                defaultVal: 2
            },
            {
                id: 2,
                optionTitle: "Save on Rest",
                defination: "Enables autosaving on sleeping.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 3,
                optionTitle: "Save on Wait",
                defination: "Enables autosaving on waiting.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 4,
                optionTitle: "Save on Travel",
                defination: "Enables autosaving on fast travel.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 5,
                optionTitle: "Save on Pause",
                defination: "Enables an autosave when pausing the game after thespecified time.",
                valueType: 3,
                value: "10 mins",
                defaultVal: 1
            }
        ]
    },
    {
        title: "display",
        options: [
            {
                id: 1,
                optionTitle: "Borderless Full Screen",
                defination: "Sets the game to be in either full screen borderless mode or windowed mode.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 2,
                optionTitle: "Window Size",
                defination: "Sets the game resolution in windowed mode.",
                valueType: 6,
                value: "1920 x 1080 (16:9)"
            },
            {
                id: 3,
                optionTitle: "Select Monitor",
                defination: "Sets the monitor used in full screen borderless mode.",
                valueType: 7,
                value: "GENERIC PNP MONITOR"
            },
            {
                id: 4,
                optionTitle: "Dynamic Resolution",
                defination: "When enabled, this allows the game resolution to be reduced dynamically in high intensity scenes in order to mantain framerate.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 5,
                optionTitle: "Render Resolution Scale",
                defination: "Controls what percentage of the display resolution to render the game at. Reduce to increase performance.",
                valueType: "range",
                value: 75,
                parity: "%",
                defaultVal: 75,
                min: 50,
                max: 100
            },
            {
                id: 6,
                optionTitle: "Graphics Preset",
                defination: "Sets the overall graphics quality.",
                valueType: 4,
                value: "custom",
                defaultVal: 3
            },
            {
                id: 7,
                optionTitle: "Shadow Quality",
                defination: "Sets the quality of shadows.",
                valueType: 1,
                value: "medium",
                defaultVal: 1
            },
            {
                id: 8,
                optionTitle: "Indirect Lighting",
                defination: "Sets the quality of indirect lighting.",
                valueType: 1,
                value: "medium",
                defaultVal: 1
            },
            {
                id: 9,
                optionTitle: "Reflections",
                defination: "Sets the quality of reflections.",
                valueType: 1,
                value: "medium",
                defaultVal: 1
            },
            {
                id: 10,
                optionTitle: "Particle Quality",
                defination: "Sets the quality of particle lighting.",
                valueType: 1,
                value: "high",
                defaultVal: 2
            },
            {
                id: 11,
                optionTitle: "Volumetric Lighting",
                defination: "Sets the quality of volumetric lighting.",
                valueType: 1,
                value: "medium",
                defaultVal: 1
            },
            {
                id: 12,
                optionTitle: "Crowd Density",
                defination: "Sets the density of crowds.",
                valueType: 1,
                value: "medium",
                defaultVal: 1
            },
            {
                id: 13,
                optionTitle: "Motion Blur",
                defination: "Sets the quality of motion blur.",
                valueType: 1,
                value: "medium",
                defaultVal: 1
            },
            {
                id: 14,
                optionTitle: "GTAO Quality",
                defination: "Sets the quality of ambiant occlusion.",
                valueType: 1,
                value: "medium",
                defaultVal: 1
            },
            {
                id: 15,
                optionTitle: "Grass Quality",
                defination: "Sets the quality of lushness of grass.",
                valueType: 1,
                value: "low",
                defaultVal: 0
            },
            {
                id: 16,
                optionTitle: "Contact Shadows",
                defination: "Sets the quality of contact shadows.",
                valueType: 1,
                value: "medium",
                defaultVal: 1
            },
            {
                id: 17,
                optionTitle: "VSync",
                defination: "When enabled, the game will cap the framerate to monitor refresh rate, preventing screen tearing.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 18,
                optionTitle: "Upscaling",
                defination: "Sets the resolution upscaling method between AMD FidelityFX Super Resolution 2 (FSR2), AMD FidelityFX Contrast Adaptive Sharpening (CAS), or Off. When Off, the game will always run at full resolution.",
                valueType: 5,
                value: "fsr2",
                defaultVal: 1
            },
            {
                id: 19,
                optionTitle: "Sharpening",
                defination: "Sets the sharpness applied by the upscaling method",
                valueType: "range",
                value: 70,
                parity: "%",
                defaultVal: 70,
                min: 0,
                max: 100
            },
            {
                id: 20,
                optionTitle: "Enable VRS",
                defination: "Enables variable rate shading during rendering.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 21,
                optionTitle: "Film Grain Intensity",
                defination: "Sets the intensity of the film grain effect.",
                valueType: "range n",
                value: 1,
                defaultVal: 1,
                min: 0,
                max: 1
            },
            {
                id: 22,
                optionTitle: "Enable Depth of Field",
                defination: "Enables depth of field effects.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            }
        ]
    },
    {
        title: "interface",
        options: [
            {
                id: 1,
                optionTitle: "Crosshair",
                defination: "Enables the HUD crosshair",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 2,
                optionTitle: "Show Floating Markers",
                defination: "Enables floating mission markers overlayed on the game world.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 3,
                optionTitle: "Show Damage Numbers",
                defination: "Enables showing floating damage numbers on the HUD.",
                valueType: 0,
                value: "off",
                defaultVal: 1
            },
            {
                id: 4,
                optionTitle: "Show Item Information in HUD",
                defination: "Show the item card displaying item information in the HUD.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 5,
                optionTitle: "HUD Opacity",
                defination: "Controls the transparency of the HUD.",
                valueType: "range",
                value: 100,
                parity: "%",
                defaultVal: 100,
                min: 0,
                max: 100

            }
        ]
    },
    {
        title: "controls",
        options: [
            {
                id: 1,
                optionTitle: "Invert Y",
                defination: "Inverts the vertical looking controls while walking.",
                valueType: 0,
                value: "off",
                defaultVal: 1
            },
            {
                id: 2,
                optionTitle: "Invert Flight Y",
                defination: "Inverts the vertical looking controls while flying a spaceship.",
                valueType: 0,
                value: "off",
                defaultVal: 1
            },
            {
                id: 3,
                optionTitle: "Invert Menu Camera X",
                defination: "Inverts the X-axis camera controls in menus.",
                valueType: 0,
                value: "off",
                defaultVal: 1
            },
            {
                id: 4,
                optionTitle: "Invert Menu Camera Y",
                defination: "Inverts the Y-axis camera controls in menus.",
                valueType: 0,
                value: "off",
                defaultVal: 1
            },
            {
                id: 5,
                optionTitle: "Flight Stick Swap",
                defination: "Swap left and right  sticks when flying ships.",
                valueType: 0,
                value: "off",
                defaultVal: 1
            },
            {
                id: 6,
                optionTitle: "Roll Dominant",
                defination: "Swap roll and yaw between primary and sacondary sticks when flying ships.",
                valueType: 0,
                value: "off",
                defaultVal: 1
            },
            {
                id: 7,
                optionTitle: "Look Sensitivity V",
                defination: "Controls the general sensitivity of vertical looking.",
                valueType: "range",
                value: 50,
                parity: "%",
                defaultVal: 50,
                min: 0,
                max: 100
            },
            {
                id: 8,
                optionTitle: "Look Sensitivity H",
                defination: "Controls the general sensitivity of horizontal looking.",
                valueType: "range",
                value: 50,
                parity: "%",
                defaultVal: 50,
                min: 0,
                max: 100
            },
            {
                id: 9,
                optionTitle: "Aim Sensitivity V",
                defination: "Controls the sensitivity of vertical looking while aiming a weapon.",
                valueType: "range",
                value: 50,
                parity: "%",
                defaultVal: 50,
                min: 0,
                max: 100
            },
            {
                id: 10,
                optionTitle: "Aim Sensitivity H",
                defination: "Controls the sensitivity of horizontal looking while aiming a weapon.",
                valueType: "range",
                value: 50,
                parity: "%",
                defaultVal: 50,
                min: 0,
                max: 100
            },
            {
                id: 11,
                optionTitle: "Controller Look Sensitivity",
                defination: "Controls the sensitivity of the looking stick on controller.",
                valueType: "range",
                value: 21,
                parity: "%",
                defaultVal: 21,
                min: 0,
                max: 100
            },
            {
                id: 12,
                optionTitle: "Controller Cursor Sensitivity",
                defination: "Scales the speed of the game cursor when using the controller.",
                valueType: "range",
                value: 19,
                parity: "%",
                defaultVal: 19,
                min: 0,
                max: 100
            },
            {
                id: 13,
                optionTitle: "Mouse Look Sensitivity",
                defination: "Controls the sensitivity of the looking controls via the mouse.",
                valueType: "range",
                value: 41,
                parity: "%",
                defaultVal: 41,
                min: 0,
                max: 100
            },
            {
                id: 14,
                optionTitle: "Ship Reticle Sensitivity",
                defination: "Adjust the sensitivity of the ship reticle.",
                valueType: "range",
                value: 67,
                parity: "%",
                defaultVal: 67,
                min: 0,
                max: 100
            },
            {
                id: 15,
                optionTitle: "Controller Vibration",
                defination: "Toggles controller vibration on or off.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 16,
                optionTitle: "Controller Hotswap",
                defination: "If enabled, using the controller will toggle off keyboard controls, and vice versa.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 17,
                optionTitle: "Outpost Item Rotation Speed",
                defination: "Item rotation speed when building/placing items.",
                valueType: "range x",
                value: 5,
                defaultVal: 5,
                min: 0,
                max: 10
            },
            {
                id: 18,
                optionTitle: "Outpost FlyCam Translation Speed",
                defination: "Outpost FlyCam speed for panning.",
                valueType: "range x",
                value: 2,
                defaultVal: 2,
                min: 0,
                max: 5
            },
            {
                id: 19,
                optionTitle: "Outpost FlyCam Rotation Speed",
                defination: "Outpost FlyCam speed for rotating.",
                valueType: "range x",
                value: 1.5,
                defaultVal: 1.5,
                min: 0,
                max: 5
            },
            {
                id: 20,
                optionTitle: "Outpost FlyCam Distance Speed",
                defination: "Outpost FlyCam speed for zooming.",
                valueType: "range x",
                value: 1,
                defaultVal: 1,
                min: 0,
                max: 5
            },
            {
                id: 21,
                optionTitle: "Outpost FlyCam Starting Pitch",
                defination: "defaultVal starting pitch for Outpost FlyCam (degrees)",
                valueType: "range",
                value: 60,
                defaultVal: 60,
                min: 0,
                max: 70
            },
            {
                id: 22,
                optionTitle: "Outpost FlyCam Starting Distance",
                defination: "defaultVal starting distance for Outpost FlyCam.",
                valueType: "range m",
                value: 55,
                defaultVal: 55,
                min: 0,
                max: 120
            }
        ]
    },
    {
        title: "bindings",
        options: [
            {
                id: 1,
                optionType: "headline",
                optionTitle: "MAIN GAMEPLAY",
                inclusiveID: 2,
                inclusiveID2: 47
            },
            {
                id: 2,
                optionTitle: "Forward",
                defaultKeyCode: 87,
                defaultKeyName: "W",
                keyCode: 87,
                keyName: "W",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 3,
                optionTitle: "Back",
                defaultKeyCode: 83,
                defaultKeyName: "S",
                keyCode: 83,
                keyName: "S",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 4,
                optionTitle: "Strafe Left",
                defaultKeyCode: 65,
                defaultKeyName: "A",
                keyCode: 65,
                keyName: "A",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 5,
                optionTitle: "Strafe Right",
                defaultKeyCode: 68,
                defaultKeyName: "D",
                keyCode: 68,
                keyName: "D",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 7,
                optionTitle: "Primary Attack",
                defaultKeyCode: "click1",
                defaultKeyName: "MOUSE1",
                keyCode: "click1",
                keyName: "MOUSE1",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 8,
                optionTitle: "Secondary Attack",
                defaultKeyCode: "click2",
                defaultKeyName: "MOUSE2",
                keyCode: "click2",
                keyName: "MOUSE2",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 9,
                optionTitle: "Melee",
                defaultKeyCode: 86,
                defaultKeyName: "V",
                keyCode: 86,
                keyName: "V",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 10,
                optionTitle: "Throw Grenade",
                defaultKeyCode: 71,
                defaultKeyName: "G",
                keyCode: 71,
                keyName: "G",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 11,
                optionTitle: "Activate",
                defaultKeyCode: 69,
                defaultKeyName: "E",
                keyCode: 69,
                keyName: "E",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 12,
                optionTitle: "Reload/Sheathe Weapon",
                defaultKeyCode: 82,
                defaultKeyName: "R",
                keyCode: 82,
                keyName: "R",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 13,
                optionTitle: "Power",
                defaultKeyCode: 90,
                defaultKeyName: "Z",
                keyCode: 90,
                keyName: "Z",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 14,
                optionTitle: "Hand Scanner/Flashlight",
                defaultKeyCode: 70,
                defaultKeyName: "F",
                keyCode: 70,
                keyName: "F",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 15,
                optionTitle: "Open Data Menu*",
                defaultKeyCode: 9,
                defaultKeyName: "TAB",
                keyCode: 9,
                keyName: "TAB",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 16,
                optionTitle: "Toggle POV",
                defaultKeyCode: "click3",
                defaultKeyName: "MOUSE3",
                keyCode: "click3",
                keyName: "MOUSE3",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 17,
                optionTitle: "Camera Zoom In",
                defaultKeyCode: "click4",
                defaultKeyName: "MOUSEWHEELUP",
                keyCode: "click4",
                keyName: "MOUSEWHEELUP",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 18,
                optionTitle: "Camera Zoom Out",
                defaultKeyCode: "click5",
                defaultKeyName: "MOUSEWHEELDOWN",
                keyCode: "click5",
                keyName: "MOUSEWHEELDOWN",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 19,
                optionTitle: "Jump",
                defaultKeyCode: 32,
                defaultKeyName: "SPACE",
                keyCode: 32,
                keyName: "SPACE",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 20,
                optionTitle: "Sprint",
                defaultKeyCode: 16,
                defaultKeyName: "SHIFT",
                keyCode: 16,
                keyName: "SHIFT",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 21,
                optionTitle: "Sneak",
                defaultKeyCode: 17,
                defaultKeyName: "CTRL",
                keyCode: 17,
                keyName: "CTRL",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 22,
                optionTitle: "Hold To Run",
                defaultKeyCode: null,
                defaultKeyName: "",
                keyCode: null,
                keyName: "",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 23,
                optionTitle: "Toggle Always-Run",
                defaultKeyCode: 20,
                defaultKeyName: "CAPS LOCK",
                keyCode: 20,
                keyName: "CAPS LOCK",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 24,
                optionTitle: "Auto-Move",
                defaultKeyCode: 144,
                defaultKeyName: "NUMLOCK",
                keyCode: 144,
                keyName: "NUMLOCK",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 26,
                optionTitle: "Open Quick-Keys",
                defaultKeyCode: 81,
                defaultKeyName: "Q",
                keyCode: 81,
                keyName: "Q",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 27,
                optionTitle: "Quick Key 1",
                defaultKeyCode: 49,
                defaultKeyName: "1",
                keyCode: 49,
                keyName: "1",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 28,
                optionTitle: "Quick Key 2",
                defaultKeyCode: 50,
                defaultKeyName: "2",
                keyCode: 50,
                keyName: "2",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 29,
                optionTitle: "Quick Key 3",
                defaultKeyCode: 51,
                defaultKeyName: "3",
                keyCode: 51,
                keyName: "3",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 30,
                optionTitle: "Quick Key 4",
                defaultKeyCode: 52,
                defaultKeyName: "4",
                keyCode: 52,
                keyName: "4",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 31,
                optionTitle: "Quick Key 5",
                defaultKeyCode: 53,
                defaultKeyName: "5",
                keyCode: 53,
                keyName: "5",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 32,
                optionTitle: "Quick Key 6",
                defaultKeyCode: 54,
                defaultKeyName: "6",
                keyCode: 54,
                keyName: "6",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 33,
                optionTitle: "Quick Key 7",
                defaultKeyCode: 55,
                defaultKeyName: "7",
                keyCode: 55,
                keyName: "7",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 34,
                optionTitle: "Quick Key 8",
                defaultKeyCode: 56,
                defaultKeyName: "8",
                keyCode: 56,
                keyName: "8",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 35,
                optionTitle: "Quick Key 9",
                defaultKeyCode: 57,
                defaultKeyName: "9",
                keyCode: 57,
                keyName: "9",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 36,
                optionTitle: "Quick Key 10",
                defaultKeyCode: 48,
                defaultKeyName: "0",
                keyCode: 48,
                keyName: "0",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 37,
                optionTitle: "Quick Key 11",
                defaultKeyCode: 219,
                defaultKeyName: "[",
                keyCode: 219,
                keyName: "[",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 38,
                optionTitle: "Quick Key 12",
                defaultKeyCode: 221,
                defaultKeyName: "]",
                keyCode: 221,
                keyName: "]",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 39,
                optionTitle: "Quick-Save",
                defaultKeyCode: 116,
                defaultKeyName: "F5",
                keyCode: 116,
                keyName: "F5",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 40,
                optionTitle: "Quick-Load",
                defaultKeyCode: 120,
                defaultKeyName: "F9",
                keyCode: 120,
                keyName: "F9",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 41,
                optionTitle: "Pause*",
                defaultKeyCode: 27,
                defaultKeyName: "ESC",
                keyCode: 27,
                keyName: "ESC",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 42,
                optionTitle: "Quick-Skills",
                defaultKeyCode: 80,
                defaultKeyName: "P",
                keyCode: 80,
                keyName: "P",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 43,
                optionTitle: "Quick-Inventory",
                defaultKeyCode: 73,
                defaultKeyName: "I",
                keyCode: 73,
                keyName: "I",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 44,
                optionTitle: "Quick-Mission",
                defaultKeyCode: 76,
                defaultKeyName: "L",
                keyCode: 76,
                keyName: "L",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 45,
                optionTitle: "Quick-Map",
                defaultKeyCode: 77,
                defaultKeyName: "M",
                keyCode: 77,
                keyName: "M",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 46,
                optionTitle: "Quick-Ship",
                defaultKeyCode: 72,
                defaultKeyName: "H",
                keyCode: 72,
                keyName: "H",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 47,
                optionTitle: "Quick-Powers",
                defaultKeyCode: 75,
                defaultKeyName: "K",
                keyCode: 75,
                keyName: "K",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 48,
                optionType: "headline",
                optionTitle: "SPACESHIP (FLIGHT)",
                inclusiveID: 49,
                inclusiveID2: 64
            },
            {
                id: 49,
                optionTitle: "Fire Boosters",
                defaultKeyCode: 16,
                defaultKeyName: "SHIFT",
                keyCode: 16,
                keyName: "SHIFT",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 50,
                optionTitle: "Switch Flight Modes",
                defaultKeyCode: 32,
                defaultKeyName: "SPACE",
                keyCode: 32,
                keyName: "SPACE",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 51,
                optionTitle: "Toggle POV",
                defaultKeyCode: 81,
                defaultKeyName: "Q",
                keyCode: 81,
                keyName: "Q",
                altKeyCode: "click3",
                altKeyName: "MOUSE3",
                defaultAltKeyCode: "click3",
                defaultAltKeyName: "MOUSE3"
            },
            {
                id: 52,
                optionTitle: "Fire Weapon 0",
                defaultKeyCode: "click1",
                defaultKeyName: "MOUSE1",
                keyCode: "click1",
                keyName: "MOUSE1",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 53,
                optionTitle: "Fire Weapon 1",
                defaultKeyCode: "click2",
                defaultKeyName: "MOUSE2",
                keyCode: "click2",
                keyName: "MOUSE2",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 54,
                optionTitle: "Fire Weapon 2",
                defaultKeyCode: 71,
                defaultKeyName: "G",
                keyCode: 71,
                keyName: "G",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 55,
                optionTitle: "Ship Action 1",
                defaultKeyCode: 82,
                defaultKeyName: "R",
                keyCode: 82,
                keyName: "R",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 56,
                optionTitle: "Select Target",
                defaultKeyCode: 69,
                defaultKeyName: "E",
                keyCode: 69,
                keyName: "E",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 58,
                optionTitle: "Increase System Power",
                defaultKeyCode: 38,
                defaultKeyName: "UP",
                keyCode: 38,
                keyName: "UP",
                altKeyCode: 86,
                altKeyName: "V",
                defaultAltKeyCode: 86,
                defaultAltKeyName: "V"
            },
            {
                id: 58,
                optionTitle: "Decrease System Power",
                defaultKeyCode: 40,
                defaultKeyName: "DOWN",
                keyCode: 40,
                keyName: "DOWN",
                altKeyCode: 67,
                altKeyName: "C",
                defaultAltKeyCode: 67,
                defaultAltKeyName: "C"
            },
            {
                id: 59,
                optionTitle: "Previous System",
                defaultKeyCode: 37,
                defaultKeyName: "LEFT",
                keyCode: 37,
                keyName: "LEFT",
                altKeyCode: 90,
                altKeyName: "Z",
                defaultAltKeyCode: 90,
                defaultAltKeyName: "Z"
            },
            {
                id: 60,
                optionTitle: "Next System",
                defaultKeyCode: 39,
                defaultKeyName: "RIGHT",
                keyCode: 39,
                keyName: "RIGHT",
                altKeyCode: 88,
                altKeyName: "X",
                defaultAltKeyCode: 88,
                defaultAltKeyName: "X"
            },
            {
                id: 61,
                optionTitle: "Open Scanner",
                defaultKeyCode: 70,
                defaultKeyName: "F",
                keyCode: 70,
                keyName: "F",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 62,
                optionTitle: "Repair",
                defaultKeyCode: 79,
                defaultKeyName: "O",
                keyCode: 79,
                keyName: "O",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 63,
                optionTitle: "Ship Alternate Control Hold",
                defaultKeyCode: 18,
                defaultKeyName: "ALT",
                keyCode: 18,
                keyName: "ALT",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 64,
                optionTitle: "Cancel",
                defaultKeyCode: 27,
                defaultKeyName: "ESC",
                keyCode: 27,
                keyName: "ESC",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 65,
                optionType: "headline",
                optionTitle: "SPACESHIP (DOCKED/GROUNDED)",
                inclusiveID: 65,
                inclusiveID2: 70
            },
            {
                id: 66,
                optionTitle: "Undock/Take-Off Ship",
                defaultKeyCode: 32,
                defaultKeyName: "SPACE",
                keyCode: 32,
                keyName: "SPACE",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 67,
                optionTitle: "Get Up",
                defaultKeyCode: 69,
                defaultKeyName: "E",
                keyCode: 69,
                keyName: "E",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 68,
                optionTitle: "Exit Ship From Cockpit",
                defaultKeyCode: 88,
                defaultKeyName: "X",
                keyCode: 88,
                keyName: "X",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 69,
                optionTitle: "Zoom Camera In",
                defaultKeyCode: "click1",
                defaultKeyName: "MOUSE1",
                keyCode: "click1",
                keyName: "MOUSE1",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            },
            {
                id: 70,
                optionTitle: "Zoom Camera Out",
                defaultKeyCode: "click2",
                defaultKeyName: "MOUSE2",
                keyCode: "click2",
                keyName: "MOUSE2",
                altKeyCode: null,
                altKeyName: "",
                defaultAltKeyCode: null,
                defaultAltKeyName: ""
            }
        ]
    },
    {
        title: "audio",
        options: [
            {
                id: 1,
                optionTitle: "Master",
                defination: "Controls the overall game volume.",
                valueType: "range",
                value: 70,
                parity: "%",
                defaultVal: 70,
                min: 0,
                max: 100
            },
            {
                id: 2,
                optionTitle: "Effects",
                defination: "Controls the volume of the sound effects.",
                valueType: "range",
                value: 70,
                parity: "%",
                defaultVal: 70,
                min: 0,
                max: 100
            },
            {
                id: 3,
                optionTitle: "Voice",
                defination: "Controls the volume of the in-game voices.",
                valueType: "range",
                value: 70,
                parity: "%",
                defaultVal: 70,
                min: 0,
                max: 100
            },
            {
                id: 4,
                optionTitle: "Music",
                defination: "Controls the volume of the background music.",
                valueType: "range",
                value: 55,
                parity: "%",
                defaultVal: 55,
                min: 0,
                max: 100
            },
            {
                id: 5,
                optionTitle: "Footsteps (Player)",
                defination: "Controls the volume of player footsteps and movement sounds.",
                valueType: "range",
                value: 75,
                parity: "%",
                defaultVal: 75,
                min: 0,
                max: 100
            },
            {
                id: 6,
                optionTitle: "Footsteps (Other)",
                defination: "Controls the volume of NPC and Creature footsteps and movement sounds.",
                valueType: "range",
                value: 75,
                parity: "%",
                defaultVal: 75,
                min: 0,
                max: 100
            }
        ]
    },
    {
        title: "accessibility",
        options: [
            {
                id: 1,
                optionTitle: "General Subtitles",
                defination: "Enables subtitles while walking around the game.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 2,
                optionTitle: "Dialogue Subtitles",
                defination: "Enables subtitles during dialogue.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 3,
                optionTitle: "First Person FOV",
                defination: "Sets the first person camera field of view angle. Adjusting this beyond the defaultVal setting may caouse performance of visual issues.",
                valueType: "range",
                value: 85,
                parity: "none",
                defaultVal: 85,
                min: 70,
                max: 110
            },
            {
                id: 4,
                optionTitle: "Third Person FOV",
                defination: "Controls the volume of the background music.",
                valueType: "range",
                value: 70,
                parity: "none",
                defaultVal: 70,
                min: 70,
                max: 110
            },
            {
                id: 5,
                optionTitle: "Item Rotation Hold and Drag",
                defination: "Change hold-and-drag-mouse to rotate items in menus to a click-and-mouse-move instead.",
                valueType: 0,
                value: "on",
                defaultVal: 0
            },
            {
                id: 6,
                optionTitle: "Toggle Ironsights",
                defination: "Enables the use of iron-sights mode when aiming a weapon as a toggle insteaed of a hold.",
                valueType: 0,
                value: "off",
                defaultVal: 1
            },
            {
                id: 7,
                optionTitle: "Large Menu Fonts",
                defination: "Use larger font size in menus where possible. Only adjustable from the main menu.",
                valueType: 0,
                value: "off",
                defaultVal: 1
            }
        ]
    },
]