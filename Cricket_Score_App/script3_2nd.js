var runs = 0, balls = 0, overs = 0, wickets = 0, total = 0, st = 0, flag = 0, nst = 0, bstwkt = 0, bnstwkt = 0, bstrun = 0, bnstrun = 0, bflag = 0, stb = 0, nstb = 0, extras = 0;
var bowl_team = localStorage.getItem('bowl');
document.getElementById("boteam").textContent = bowl_team;
var totalovers = localStorage.getItem('overs');


function score(value) {
    if (overs == totalovers) {
        flag = -1;
        bflag = -1;
    }


    if (balls === 5 && flag != -1) {
        if (wickets === 10) {
            runs = total;
        }
        else {
            if (flag === 0) {
                if (value % 2 === 1) {
                    flag = 0;
                }
                else {
                    flag = 1;
                }
                st += value;
                stb += 1;
            }
            else if (flag === 1) {
                if (value % 2 === 1) {
                    flag = 1;
                }
                else {
                    flag = 0;
                }
                nst += value;
                nstb += 1;
            }
            if (bflag === 0) {
                bstrun += value;
            }
            else if (bflag === 1) {
                bnstrun += value;
            }
            runs += value;
            total = runs;
            balls = (balls + 1) % 6;
            overs += 1;
            if (overs % 2 === 0 && flag != -1) {
                bflag = 0;
                bstrun = 0
                bstwkt = 0
            }
            else if (flag != -1 && overs % 2 != 0) {
                bflag = 1;
                bnstrun = 0;
                bnstwkt = 0;
            }
        }

    }
    else {
        if (wickets === 10 && flag != -1) {
            runs = total;
        }
        else {
            if (flag === 0) {
                if (value % 2 === 0) {
                    flag = 0;
                }
                else {
                    flag = 1;
                }
                st += value;
                stb += 1;
            }
            else if (flag === 1) {
                if (value % 2 === 0) {
                    flag = 1;
                }
                else {
                    flag = 0;
                }
                nst += value;
                nstb += 1;
            }
            if (bflag === 0) {
                bstrun += value;
            }
            else if (bflag === 1) {
                bnstrun += value;
            }
            runs += value;
            total = runs;
            balls = (balls + 1) % 6;
        }
    }
    if (flag === 0 || flag === 1) {
        document.getElementById("runs").innerHTML = total;
        document.getElementById("ex").innerHTML = extras;
        document.getElementById("Overs").innerHTML = overs + "." + balls + "(" + totalovers + ")";
        document.getElementById("st").innerHTML = st + "(" + stb + ")";
        document.getElementById("nst").innerHTML = nst + "(" + nstb + ")";
        document.getElementById("bst").innerHTML = bstwkt + "-" + bstrun;
        document.getElementById("bnst").innerHTML = bnstwkt + "-" + bnstrun;
    }
}
function wicket(out) {
    if (overs == totalovers) {
        flag = -1;
        bflag = -1;
        document.getElementById("popupwk").style.display = "none";
        document.getElementById("overlaywk").style.display = "none";
    }
    if (out === -1 && wickets != 10) {
        if (balls === 5 && flag != -1) {
            balls = 0;
            wickets += 1;
            overs += 1;
            if (flag === 0) {
                st = 0;
                stb = 0;
            }
            else if (flag === 1) {
                nst = 0;
                nstb = 0;
            }
            if (bflag === 0) {
                bstwkt += 1;
            }
            else if (bflag === 1) {
                bnstwkt += 1;
            }
            if (overs % 2 === 0 && flag != -1) {
                bflag = 0;
                bstrun = 0
                bstwkt = 0
            }
            else if (flag != -1 && overs % 2 != 0) {
                bflag = 1;
                bnstrun = 0;
                bnstwkt = 0;
            }
        }
        else {
            balls = (balls + 1) % 6;
            wickets += 1;
            if (flag === 0) {
                st = 0;
                stb = 0;
            }
            else if (flag === 1) {
                nst = 0;
                nstb = 0;
            }
            if (bflag === 0) {
                bstwkt += 1;
            }
            else if (bflag === 1) {
                bnstwkt += 1;
            }
        }
    }
    else if (out === -1 && wickets === 10) {
        bflag = -1;
    }

    if (flag === 0 || flag === 1) {
        document.getElementById("popupwk").style.display = "none";
        document.getElementById("overlaywk").style.display = "none";
        document.getElementById("runs").innerHTML = runs;
        document.getElementById("ex").innerHTML = extras;
        document.getElementById("wicket").innerHTML = wickets;
        document.getElementById("Overs").innerHTML = overs + "." + balls + "(" + totalovers + ")";
        document.getElementById("st").innerHTML = st + "(" + stb + ")";
        document.getElementById("nst").innerHTML = nst + "(" + nstb + ")";
        document.getElementById("bst").innerHTML = bstwkt + "-" + bstrun;
        document.getElementById("bnst").innerHTML = bnstwkt + "-" + bnstrun;
    }
}

function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function openPopupn() {
    document.getElementById("popupn").style.display = "block";
    document.getElementById("overlayn").style.display = "block";
}

function openPopupb() {
    document.getElementById("popupb").style.display = "block";
    document.getElementById("overlayb").style.display = "block";
}

function openPopuplb() {
    document.getElementById("popuplb").style.display = "block";
    document.getElementById("overlaylb").style.display = "block";
}

function openPopupwk() {
    document.getElementById("popupwk").style.display = "block";
    document.getElementById("overlaywk").style.display = "block";
}

function closePopupwk() {
    document.getElementById("popupwk").style.display = "none";
    document.getElementById("overlaywk").style.display = "none";
}


function closePopup() {
    var wide = 0, cwide = 0;
    wide = parseInt(document.getElementById("val").value);
    if (wickets === 10) {
        flag = -1;
        document.getElementById("popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
    if (overs == totalovers) {
        flag = -1;
        document.getElementById("popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
    if (wide % 2 == 0) {
        wide = wide + 1;
        runs += wide;
        total = runs;
        extras += wide;
        cwide++;
    }
    else {
        if (flag === 0) {
            flag = 1;
        } else if (flag === 1) {
            flag = 0;
        }
        wide = wide + 1;
        runs += wide;
        total = runs;
        extras += wide;
        cwide++;
    }
    if (bflag === 0) {
        bstrun += wide;
    }
    else if (bflag === 1) {
        bnstrun += wide;
    }
    if (flag === 0 || flag === 1) {
        document.getElementById("popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        document.getElementById("runs").innerHTML = total;
        document.getElementById("ex").innerHTML = extras;
        document.getElementById("wides").innerHTML = cwide;
        document.getElementById("bst").innerHTML = bstwkt + "-" + bstrun;
        document.getElementById("bnst").innerHTML = bnstwkt + "-" + bnstrun;
    }
}

function noballPopup() {
    var nb = 0, cnb = 0;
    nb = parseInt(document.getElementById("n").value);
    if (overs == totalovers) {
        flag = -1;
        bflag = -1;
        document.getElementById("popupn").style.display = "none";
        document.getElementById("overlayn").style.display = "none";
    }
    if (wickets === 10) {
        flag = -1;
        bflag = -1;
        document.getElementById("popupn").style.display = "none";
        document.getElementById("overlayn").style.display = "none";
    }
    if (nb % 2 == 0) {
        if (flag === 0) {
            st += nb;
            stb += 1;
        }
        else if (flag === 1) {
            nst += nb;
            nstb += 1;
        }
        nb = nb + 1;
        runs += nb;
        total = runs;
        extras += 1;
        cnb++;
    }
    else {
        if (flag === 0) {
            st += nb;
            stb += 1;
            flag = 1;
        }
        else if (flag === 1) {
            nst += nb;
            nstb += 1;
            flag = 0;
        }
        nb = nb + 1;
        runs += nb;
        total = runs;
        extras += 1;
        cnb++;
    }
    if (bflag === 0) {
        bstrun += nb;
    }
    else if (bflag === 1) {
        bnstrun += nb;
    }
    if (flag === 0 || flag === 1) {
        document.getElementById("popupn").style.display = "none";
        document.getElementById("overlayn").style.display = "none";
        document.getElementById("runs").innerHTML = total;
        document.getElementById("ex").innerHTML = extras;
        document.getElementById("noballs").innerHTML = cnb;
        document.getElementById("st").innerHTML = st + "(" + stb + ")";
        document.getElementById("nst").innerHTML = nst + "(" + nstb + ")";
        document.getElementById("bst").innerHTML = bstwkt + "-" + bstrun;
        document.getElementById("bnst").innerHTML = bnstwkt + "-" + bnstrun;
    }
}

function byesPopup() {
    var byes = 0;
    byes = parseInt(document.getElementById("b").value);
    if (overs == totalovers) {
        flag = -1;
        bflag = -1;
        document.getElementById("popupb").style.display = "none";
        document.getElementById("overlayb").style.display = "none";
    }
    if (wickets === 10) {
        flag = -1;
        bflag = -1;
        document.getElementById("popupb").style.display = "none";
        document.getElementById("overlayb").style.display = "none";
    }
    if (byes % 2 == 0) {
        if (flag === 0) {
            stb += 1;
        }
        else if (flag === 1) {
            nstb += 1;
        }
        runs += byes;
        total = runs;
        extras += byes;
        balls = (balls + 1) % 6;
    }
    else {
        if (flag === 0) {
            stb += 1;
            flag = 1;
        }
        else if (flag === 1) {
            nstb += 1;
            flag = 0;
        }
        runs += byes;
        total = runs;
        extras += byes;
        balls = (balls + 1) % 6;
    }
    if (flag === 0 || flag === 1) {
        document.getElementById("popupb").style.display = "none";
        document.getElementById("overlayb").style.display = "none";
        document.getElementById("runs").innerHTML = total;
        document.getElementById("wicket").innerHTML = wickets;
        document.getElementById("Overs").innerHTML = overs + "." + balls + "(" + totalovers + ")";
        document.getElementById("ex").innerHTML = extras;
        document.getElementById("by").innerHTML = byes;
        document.getElementById("st").innerHTML = st + "(" + stb + ")";
        document.getElementById("nst").innerHTML = nst + "(" + nstb + ")";
        document.getElementById("bst").innerHTML = bstwkt + "-" + bstrun;
        document.getElementById("bnst").innerHTML = bnstwkt + "-" + bnstrun;
    }
}

function legbyesPopup() {
    var lbyes = 0;
    lbyes = parseInt(document.getElementById("lb").value);
    if (overs == totalovers) {
        flag = -1;
        bflag = -1;
        document.getElementById("popuplb").style.display = "none";
        document.getElementById("overlaylb").style.display = "none";
    }
    if (wickets === 10) {
        flag = -1;
        bflag = -1;
        document.getElementById("popuplb").style.display = "none";
        document.getElementById("overlaylb").style.display = "none";
    }
    if (lbyes % 2 == 0) {
        if (flag === 0) {
            stb += 1;
        }
        else if (flag === 1) {
            nstb += 1;
        }
        runs += lbyes;
        total = runs;
        extras += lbyes;
        balls = (balls + 1) % 6;
    }
    else {
        if (flag === 0) {
            stb += 1;
            flag = 1;
        }
        else if (flag === 1) {
            nstb += 1;
            flag = 0;
        }
        runs += lbyes;
        total = runs;
        extras += lbyes;
        balls = (balls + 1) % 6;
    }
    if (flag === 0 || flag === 1) {
        document.getElementById("popuplb").style.display = "none";
        document.getElementById("overlaylb").style.display = "none";
        document.getElementById("runs").innerHTML = total;
        document.getElementById("wicket").innerHTML = wickets;
        document.getElementById("Overs").innerHTML = overs + "." + balls + "(" + totalovers + ")";
        document.getElementById("ex").innerHTML = extras;
        document.getElementById("leg").innerHTML = lbyes;
        document.getElementById("st").innerHTML = st + "(" + stb + ")";
        document.getElementById("nst").innerHTML = nst + "(" + nstb + ")";
        document.getElementById("bst").innerHTML = bstwkt + "-" + bstrun;
        document.getElementById("bnst").innerHTML = bnstwkt + "-" + bnstrun;
    }
}