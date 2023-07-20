/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const mfEl = document.getElementById("mf-el") 
const lgEl = document.getElementById("lg-el") 
const kpEl = document.getElementById("kp-el") 
const inputEl = document.getElementById("input-el")
const convertEl = document.getElementById("convert-btn")
let val  = ""
let feet =  ""
let meter = "" 
let liter = ""
let gallon = ""
let pound = ""
let kilogram = ""

convertEl.addEventListener("click",function(){
    val = inputEl.value 
     feet =  val * 3.281
     gallon = val *  0.264
     pound = val * 2.204
     meter = val /3.28
     liter = val / 0.264
     kilogram = val / 2.204
     
    mfEl.textContent = `${val} meters = ${feet.toFixed(3)} feet | ${val} feet = ${meter.toFixed(3)} meters` 
    lgEl.textContent = `${val} liters = ${gallon.toFixed(3)} gallon | ${val} gallon = ${liter.toFixed(3)} liters` 
    kpEl.textContent = `${val} kilogram = ${pound.toFixed(3)} pound | ${val} pound = ${kilogram.toFixed(3)} kilogram` 
     

})