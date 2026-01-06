Etch a Sketch (Learning Project)
A simple drawing grid in the browser. Hover/drag to paint squares.

Features
	•	16×16 grid by default
	•	Modes: Color, Rainbow, Greyscale (darkens on repeated passes), Eraser
	•	Reset button
	•	Grid size slider (up to 100×100)

How to use
	•	Select a mode
	•	Hold left mouse button and drag across the grid to draw
	•	Use Reset to clear the board

Tech
	•	Vanilla HTML, CSS, JavaScript
	•	Flexbox grid

Known limitations (current)
	•	Uses many per-square event listeners (should switch to event delegation on .grid)
	•	Uses mouse events only (should use Pointer Events for mobile/touch)
	•	Mode state is stored in DOM/classes (should use a currentMode state variable)
	•	Uses inline styles (should use CSS classes / CSS variables)
	•	fillGrid() does too much (should be split into smaller functions)

What I learned
	•	Event delegation vs many listeners
	•	Managing state cleanly (avoid implicit globals + DOM-as-state)
	•	Planning for touch input (Pointer Events)
	•	Keeping functions single-purpose