let boxes = document.getElementById("output");
let box1 = document.getElementById('one');
let box2 = document.getElementById('two');
let box3 = document.getElementById('three');

function Reset() {
    boxes.style.flexDirection = "row";
    boxes.style.justifyContent = "start";
    boxes.style.alignItems = "start";
    boxes.style.gap = 0;
    box1.style.flexGrow = 0;
    box2.style.flexGrow = 0;
    box3.style.flexGrow = 0;
}

function Gap(x) {
    boxes.style.gap = x + "px";
}

function FlexDirect(x) {
    if (x == 1) {
        boxes.style.flexDirection = "row";
    } else if (x == 2) {
        boxes.style.flexDirection = "column";
    }
};

function JustCont(x) {
    if (x == 0) {
        boxes.style.justifyContent = "start"
    } else if (x == 1) {
        boxes.style.justifyContent = "center"
    } else if (x == 2) {
        boxes.style.justifyContent = "end"
    } else if (x == 3) {
        boxes.style.justifyContent = "space-between"
    } else if (x == 4) {
        boxes.style.justifyContent = "space-around"
    } else if (x == 5) {
        boxes.style.justifyContent = "space-evenly"
    }
};

function Align(x) {
    if (x == 0) {
        boxes.style.alignItems = "start";
    } else if (x == 1) {
        boxes.style.alignItems = "center";
    } else if (x == 2) {
        boxes.style.alignItems = "end";
    }
};

function FlexGrow(x) {
    if (x == 0) {
        boxes.style = "0";
    } else if (x == 1) {
        box1.style.flexGrow++;
    } else if (x == 2) {
        box2.style.flexGrow++;
    } else if (x == 3) {
        box3.style.flexGrow++;
    }
};