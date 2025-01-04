// idk random script shit that makes shit happen
var moyaiSound = new Audio("moyai.mp3");
var hellWhistleRAAH = new Audio("whistle.mp3")
var BOOm = new Audio("boom.mp3")
var moyaiDevotion = 0;
var moyaiClicks = document.getElementById("moyaiClicks")
var moyaiRank = document.getElementById("moyaiRank")
var moyaiGodBool = false
var moyaiExpBool = false
var moyaiCadBool = false
var moyaiBegBool = false

function hellWhistle() {
    hellWhistleRAAH.play()
    setTimeout(2000)
    BOOm.play()
}

function MOYAI() {
    moyaiSound.play();
    moyaiDevotion++

    moyaiClicks.textContent = "Clicks: " + moyaiDevotion.toString()

    if (moyaiDevotion == 400) {
        moyaiRank.textContent = "Moyai GOD"

        if (moyaiGodBool == false) {
            alert("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿")
            alert("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿")
            alert("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿")
            alert("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿")
            alert("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿")
            alert("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿")
            alert("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿")
            alert("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿")
            alert("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿")
            alert("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿")
            alert("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿")
            moyaiGodBool == true
        }

        
    } else if (moyaiDevotion == 300) {
        moyaiRank.textContent = "Moyai Expert"

        if (moyaiExpBool == false) {
            alert("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿")
            alert("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿")
            alert("🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿")
            moyaiExpBool == true
        }

    } else if (moyaiDevotion == 200) {
        moyaiRank.textContent = "Moyai Cadet"

        if (moyaiCadBool == false) {
            alert("🗿🗿🗿🗿🗿")
            moyaiCadBool == true
        }
        
    } else if (moyaiDevotion == 100) {
        moyaiRank.textContent = "Moyai Beginner"

        if (moyaiBegBool == false) {
            alert("🗿")
            moyaiBegBool == true
        }
    }
}