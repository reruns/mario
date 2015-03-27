Description
===========
Mario.js is a clone of Super Mario Bros. for the Nintendo Entertainment System, implemented in Javascript.  It implements a hand-built game engine using the HTML5 Canvas.

Disclaimer: This project is for demonstration only. If you really want to play Mario, please do it on a console. The graphics, sounds, and original design of Super Mario Bros. are all owned by Nintendo.

Highlights
==========

Since the canvas doesn't implement a z-index, the layering effect over background props such as clouds and bushes is handled entirely using the order in which we render sprites each frame.

Scrolling is implemented using a viewport position that increases as Mario travels to the right. We only render or do calculations on objects that are close enough to the left edge of the screen. As in the original game, enemies become active before they appear on screen.

Obstacles such as walls, the ground, and the various blocks are indexed by their position in the game, so we can very easily only check collision on things directly adjacent to moving characters.

The level is constructed using a series of calls to functions that generate the tables of objects in the game world. These can easily by reused to create more levels.

Known Bugs and Features to Come
===============================
-Scaling sprites makes them appear with awkward borders. Some fiddling helps this (as you can see in the live version), but they are still not quite perfect.
-Goombas don't animate in sync with each other.
-Sometimes goombas can get stuck inside each other. I believe this is caused by walking exactly far enough to activate one of them (offscreen), and then coincidentally activating the second one while they are closely overlapped.

All of the features to be implemented are the actual features of the game!
Namely, destroying bricks, a score counter, working pipes, sounds and music, more types of enemies, and 1up mushrooms.

And more levels!

Also, it should be possible to scale the game to any size, although in order to preserve sprite dimensions changing the actual size of the play area will be necessary for widescreen. For now, the game is rendered in 768x720.

Beyond that, it would be nice to recreate the original game in even more detail, including the precise replication of the 21-frame rule, and glitches such as well-ejection errors, alternate pipes, and various simultaneous left+right input shenanigans.
