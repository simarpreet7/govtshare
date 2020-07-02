//defining doc name

var docName = "Untitled Spreadsheet (Click to Edit) ";
document.getElementById("doc_name").innerHTML = docName;
document.querySelector('#doc_name').addEventListener('click', function () {
    docName = prompt("Please enter name of Document ", "<name goes here>");
    if (docName != null) {
        document.getElementById("doc_name").innerHTML = docName;
    }
});

// Defining the function to create empty data
console.log('file loading');
function creatEmptyDataArray(x, y) {
    var arr = new Array(x);
    for (var i = 0; i < x; i++) {
        arr[i] = new Array(y);
    }
    return arr;
}

var data = creatEmptyDataArray(40, 20);

// var data2 = [
//     ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
//     ['2017', 10, 11, 12, 13],
//     ['2018', 20, 11, 14, 13],
//     ['2019', 30, 15, 12, 13]
//   ];
var startRow, startCol, endRow, endCol;

var dataSaved = creatEmptyDataArray(40, 20);

var container = document.getElementById('example');
var hot = new Handsontable(container, {
    data: data,
    rowHeaders: true,
    colHeaders: true,
    filters: true,
    dropdownMenu: true,
    manualColumnResize: true,
    manualRowResize: true,
    licenseKey: 'non-commercial-and-evaluation',
    afterSelectionEnd: function (r, c, r2, c2) {
        startRow = r;
        startCol = c;
        endRow = r2;
        endCol = c2;
    },

});
num_rows = $("example").handsontable('countRows');


// Use 2D Array of Strings to set className formatting
// Use 2D Array of Strings to set Data in cells

//String Matching and Removal for purpose of formattting
function check(cellMeta, str) {
    var check = false, modified_str = "", s = -1, e = -1;
    for (var i = 0; i <= cellMeta.length - str.length; ++i) {
        flag = true;
        for (var j = i; j < i + str.length; ++j) {
            if (cellMeta[j] != str[j - i]) {
                flag = false;
                break;
            }
        }

        if (flag) {
            check = true;
            s = i - 1;
            e = i + str.length;
            break;
        }
    }

    if (check) {
        s--;
        for (var i = 0; i < cellMeta.length; ++i) {
            if (i <= s || i >= e) {
                modified_str += (cellMeta[i]);
            }
        }
        return modified_str;
    }
    modified_str = cellMeta + " " + str;
    return modified_str;
}

//Make Text bold
document.querySelector('.bold').addEventListener('click', function () {
    for (var j = 0; j < (endCol - startCol + 1); j++) {
        for (var i = 0; i < (endRow - startRow + 1); i++) {
            var cellMeta = hot.getCellMeta(startRow + i, startCol + j).className;
            var str = ' bold';
            if (cellMeta)
                var str = check(cellMeta, 'bold');

            hot.setCellMeta(startRow + i, startCol + j, 'className', str)
        }
    }
    hot.render();
});

//Make text Italics
document.querySelector('.italic').addEventListener('click', function () {
    for (var j = 0; j < (endCol - startCol + 1); j++) {
        for (var i = 0; i < (endRow - startRow + 1); i++) {
            var cellMeta = hot.getCellMeta(startRow + i, startCol + j).className;
            var str = ' italic';
            if (cellMeta)
                var str = check(cellMeta, 'italic');

            hot.setCellMeta(startRow + i, startCol + j, 'className', str)
        }
    }
    hot.render();
});

//Make text Underline
document.querySelector('.underline').addEventListener('click', function () {
    for (var j = 0; j < (endCol - startCol + 1); j++) {
        for (var i = 0; i < (endRow - startRow + 1); i++) {
            var cellMeta = hot.getCellMeta(startRow + i, startCol + j).className;
            var str = ' underline';
            if (cellMeta)
                var str = check(cellMeta, 'underline');

            hot.setCellMeta(startRow + i, startCol + j, 'className', str)
        }
    }
    hot.render();
});

//Make text Linethrough
document.querySelector('.linethrough').addEventListener('click', function () {
    for (var j = 0; j < (endCol - startCol + 1); j++) {
        for (var i = 0; i < (endRow - startRow + 1); i++) {
            var cellMeta = hot.getCellMeta(startRow + i, startCol + j).className;
            var str = 'linethrough';
            if (cellMeta)
                var str = check(cellMeta, 'linethrough');

            hot.setCellMeta(startRow + i, startCol + j, 'className', str)
        }
    }
    hot.render();
});

//Make text Align_Left
document.querySelector('.align_left').addEventListener('click', function () {
    for (var j = 0; j < (endCol - startCol + 1); j++) {
        for (var i = 0; i < (endRow - startRow + 1); i++) {
            var cellMeta = hot.getCellMeta(startRow + i, startCol + j).className;
            var str = 'align_left';
            if (cellMeta)
                var str = check(cellMeta, 'align_left');

            hot.setCellMeta(startRow + i, startCol + j, 'className', str);
        }
    }
    hot.render();
});

//Make text Align_Right
document.querySelector('.align_right').addEventListener('click', function () {
    for (var j = 0; j < (endCol - startCol + 1); j++) {
        for (var i = 0; i < (endRow - startRow + 1); i++) {
            var cellMeta = hot.getCellMeta(startRow + i, startCol + j).className;
            var str = 'align_right';
            if (cellMeta)
                var str = check(cellMeta, 'align_right');

            hot.setCellMeta(startRow + i, startCol + j, 'className', str);
        }
    }
    hot.render();
});

//Make text Align_center
document.querySelector('.align_center').addEventListener('click', function () {
    for (var j = 0; j < (endCol - startCol + 1); j++) {
        for (var i = 0; i < (endRow - startRow + 1); i++) {
            var cellMeta = hot.getCellMeta(startRow + i, startCol + j).className;
            var str = 'align_center';
            if (cellMeta)
                var str = check(cellMeta, 'align_center');

            hot.setCellMeta(startRow + i, startCol + j, 'className', str);
        }
    }
    hot.render();
});



//Implementing the Save Functionality/button
document.querySelector('.save').addEventListener('click', function () {
    console.log("Save");
    dataSaved = hot.getData();
    hot.render();
    //To Store in Backend use JSON.stringify method on hot.getData() and hot.getCellMeta

    console.log(rid);
    var obj = {};
    obj.data = dataSaved;
    if (!doc || doc.created_by === rid) {
        obj.save_fname = document.getElementById("doc_name").innerHTML;
    }
    else obj.save_fname = doc.document_name;

    var cellM = new Array(40);

    for (var i = 0; i < 40; ++i) {
        cellM[i] = [];
        for (var j = 0; j < 20; ++j) {
            cellM[i].push(hot.getCellMeta(i, j).className);
        }
    }

    obj.cellMeta = cellM;
    var objS = JSON.stringify(obj);

    $.post('/sheets/' + id, { data: objS }, function (data, status) {
        window.location.href = "/drive/" + rid;
    });
});

//Implementing the Load Functionality/button
document.querySelector('.load').addEventListener('click', function () {
    //dataSaved;
    console.log("Load");
    hot.loadData(dataSaved);
    data = dataSaved;
    hot.render();
});

//Sharing menu
var counterSelectionPane = 0;
document.querySelector('.shareButton').addEventListener('click', function () {
    if (counterSelectionPane % 2 == 0) {
        document.getElementById("share-selection-pane").style.visibility = "visible";
    } else {
        document.getElementById("share-selection-pane").style.visibility = "hidden";
    }
    counterSelectionPane = counterSelectionPane + 1;
});

function hideSelectionPane() {
    document.getElementById("share-selection-pane").style.visibility = "hidden";
    counterSelectionPane = counterSelectionPane + 1;
}