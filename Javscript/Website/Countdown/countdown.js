const countdown = () => {
     const countDate = new Date('June 13, 2022 04:20:42').getTime()
     const now = new Date().getTime()
     const gap = countDate - now

     const second = 1000
     const minute = second * 60
     const hour = minute * 60
     const day = hour * 24

     const DayTime = Math.floor(gap / day)
     const HourTime = Math.floor((gap % day) / hour)
     const MinuteTime = Math.floor((gap % hour) / minute)
     const SecondTime = Math.floor((gap % minute) / second)

     document.querySelector('.day').innerHTML = DayTime
     document.querySelector('.hour').innerHTML = HourTime
     document.querySelector('.minute').innerHTML = MinuteTime
     document.querySelector('.second').innerHTML = SecondTime
}

setInterval(countdown, 1000)