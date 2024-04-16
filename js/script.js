// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Giordan Zeina
// Created on: Mar 2024
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a trapezoid
 */
function myButtonClicked() {
  // input
  const aBase = parseFloat(document.getElementById('a-base').value)
  const bBase = parseFloat(document.getElementById('b-base').value)
  const height = parseFloat(document.getElementById('height').value)

  // process
  const area = ((aBase + bBase) / 2) * height

  // output
  document.getElementById('area').innerHTML = 'The area is: ' + area + ' mm²'
}