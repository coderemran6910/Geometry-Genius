function genaretTriAngle() {
    const triangleBase = getInputValuById("triangleBase")
    const triangleHeight = getInputValuById("triangleHeight")

    if (isNaN(triangleBase) || isNaN(triangleHeight)) {
        alert("Provide a vaid number ");
        return
    }
    const area = 0.5 * triangleBase * triangleHeight;

    setElementValueByIdAndResult("resultList", area, "triangleTitle");


    //    Show result in card
    showResultInBody("trianglrDisplay", "Tringle Area", area )

}

function genaretRectangle() {
    const rectangleWidth = getInputValuById("RectangleWidth")

    const rectangleLength = getInputValuById("RectangleLength")
    console.log(rectangleLength);


    const area = rectangleWidth * rectangleLength;

    setElementValueByIdAndResult("resultList", area, "RectangleTitle")

        //    Show result in card
        showResultInBody("ractangleDisplay", "Rectangle Area", area )

}

function genaretparallelogram() {
    const parallelogramBase = getInputValuById("parallelogramWidth")

    const parallelogramHeight = getInputValuById("parallelogramLength")


    const area = parallelogramBase * parallelogramHeight;

    setElementValueByIdAndResult("resultList", area, "parallelogramTitle")

      //    Show result in card
      showResultInBody("parallelogramDisplay", "Parallelogram Area", area )
}

function genaretRhombus() {
    const rhombusD1 = getInputValuById("rhombusD1")
    const rhombusD2 = getInputValuById("rhombusD2")


    const area = 0.5 * rhombusD1 * rhombusD2;

    setElementValueByIdAndResult("resultList", area, "rhombusTitle")

      //    Show result in card
      showResultInBody("rhombusDisplay", "Rhombus Area", area )
}



function genaretPentagon() {
    const perimeter = getInputValuById("perimeter")
    const apothem = getInputValuById("apothem")


    const area = 0.5 * perimeter * apothem;

    setElementValueByIdAndResult("resultList", area, "pentagonTitle")

      //    Show result in card
      showResultInBody("pentagonDisplay", "Pentagon Area", area )
}


function genaretEllipse(){
    const semiMejor = getInputValuById("semiMejor")
    const semiMenor = getInputValuById("semiMenor")


    const area = Math.PI * semiMejor * semiMenor;

    setElementValueByIdAndResult("resultList", area, "ellipseTitle")

      //    Show result in card
      showResultInBody("ellipseDisplay", "Ellipse Area", area )
}




