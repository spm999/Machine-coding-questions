const circleCo = [];
let message=''
document.addEventListener('click', function (event) {
    // Create a new circle element
    const circleDiv = document.createElement('div');
    circleDiv.className = 'circle';

    // Check if there are already two circles present
    if (document.querySelectorAll('.circle').length === 2) {
        // If there are two circles, remove them
        console.log("Removing existing circles");
        document.querySelectorAll('.circle').forEach(circle => circle.remove());
    }

    // Calculate a random radius for the circle
    const minRadius = 50; // Minimum radius
    const maxRadius = 150; // Maximum radius
    const radius = minRadius + Math.random() * (maxRadius - minRadius);

    // Calculate the position of the circle relative to the click event coordinates
    const x = event.clientX  ; // Adjust for the circle's radius
    const y = event.clientY  ; // Adjust for the circle's radius

    // Store the circle's coordinates and radius in the circleCo array
    circleCo.push({ x, y, radius });

    // Set the position and size of the circle
    circleDiv.style.left = `${x-radius}px`;
    circleDiv.style.top = `${y-radius}px`;
    circleDiv.style.height = `${radius*2}px`;
    circleDiv.style.width = `${radius*2}px`;

    // Log the circle coordinates
    console.log("Circle:", { x, y, radius });

    // If there are two circles in the array, check if they intersect or if one is inside the other
    if (circleCo.length === 2) {
        const x1 = circleCo[0].x;
        const x2 = circleCo[1].x;
        const y1 = circleCo[0].y;
        const y2 = circleCo[1].y;
        const r1 = circleCo[0].radius;
        const r2 = circleCo[1].radius;

        // Calculate the distance between the centers of the circles
        const distance = Math.hypot((x1 - x2), (y1 - y2));

        // console.log( distance1, r1+r2)
        console.log("coor",x1,x2,y1,y2)
        console.log("ppp",Math.abs(r1-r2), r1, r2, distance)

        // Check if the circles intersect or if one is inside the other
        if (distance <= Math.abs(r1 - r2)) {
            message="One circle is completely inside another.";
            console.log("One circle is completely inside another.");
        } else if (distance <= r1 + r2) {
            message="Circles intersect!";
            console.log("Circles intersect!");
        } else {
            message="Circles do not intersect.";
            console.log("Circles do not intersect.");
        }

        // Clear the circleCo array for the next set of circles
        circleCo.length = 0;
        
        setTimeout(function() {
            alert(message);
        }, 300); 
    }
    // Append the circle to the document body
    document.body.appendChild(circleDiv);
});

