/*
 * @Author: saber2pr
 * @Date: 2020-04-01 17:40:45
 * @Last Modified by: saber2pr
 * @Last Modified time: 2020-04-03 15:57:41
 */
;(() => {
  const isMob = /Android|webOS|iPhone|iPod|BlackBerry/i.test(
    navigator.userAgent
  )
  
  const time = 1

  const style = `.CLICK-MASK{pointer-events:none;z-index:999;position:fixed;width:20px;height:20px;border-radius:50%;background:#a2b4cf;box-shadow:0 0 0 10px #8d8f91;animation:CLICK-MASK ${time}s ease-out;opacity:0;}@keyframes CLICK-MASK{0%{transform:scale(0);opacity:1;}100%{box-shadow:0 0 0 10px transparent;transform:scale(1);opacity:0;}}`

  const styler = document.createElement("style")
  styler.innerHTML = style

  const createMask = (x, y) => {
    if (!styler.parentNode) {
      document.head.append(styler)
    }

    const mask = document.createElement("div")

    mask.className = "CLICK-MASK"
    mask.style.left = x - 10 + "px"
    mask.style.top = y - 10 + "px"

    document.body.append(mask)

    setTimeout(() => document.body.removeChild(mask), time * 1000)
  }

  if (isMob) {
    document.addEventListener("touchstart", event => {
      const x = event.touches[0].clientX
      const y = event.touches[0].clientY
      createMask(x, y)
    })
  } else {
    document.addEventListener("click", event => {
      const x = event.clientX
      const y = event.clientY
      createMask(x, y)
    })
  }
})()
