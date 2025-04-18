"use client";  // Ensure this is a Client Component
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';

// Define a function to get the size of the SVG based on the viewport or parent container
const getResponsiveSize = () => {
  const width = Math.min(window.innerWidth, 600);  // Maximum width, ensure it's not too large
  const height = Math.min(window.innerHeight, 400);  // Maximum height
  return [width, height];
};

const WordCloudComponent = (props) => {
  const { words } = props;
  const svgRef = useRef();
  const [svgSize, setSvgSize] = useState(getResponsiveSize());

  useEffect(() => {
    const handleResize = () => {
      setSvgSize(getResponsiveSize());  // Update size on window resize
    };

    window.addEventListener('resize', handleResize);  // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize);  // Cleanup event listener
    };
  }, []);

  useEffect(() => {
    const layout = cloud()
      .size(svgSize)  // Set the canvas size based on the current state
      .words(
        words.map((word) => ({
          text: word.text,
          size: word.value * 2,  // Adjust font size relative to the new size
        }))
      )
      .padding(5)  // Adequate padding to avoid overlap
      .rotate(() => (Math.random() > 0.5 ? 90 : 0))  // Random rotation for variety
      .fontSize((word) => word.size)
      .on('end', draw);

    layout.start();

    function draw(words) {
        const colorScale = d3.scaleOrdinal(d3.schemeCategory10);  // Define color scale
      
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();  // Clear any existing content
      
        svg
          .attr('width', svgSize[0])  // Set responsive width
          .attr('height', svgSize[1])  // Set responsive height
          .append('g')
          .attr('transform', `translate(${svgSize[0] / 2}, ${svgSize[1] / 2})`)  // Center the cloud
          .selectAll('text')
          .data(words)  // Ensure the correct data is bound to the elements
          .enter()
          .append('text')
          .style('font-family', 'sans-serif')
          .style('font-size', (d) => `${d.size}px`)  // Correct callback with defined argument
          .style('fill', (d) => colorScale(d.text))  // Corrected callback
          .attr('text-anchor', 'middle')  // Center the text
          .attr('transform', (d) => `translate(${d.x}, ${d.y}) rotate(${d.rotate})`)  // Correct placement
          .text((d) => d.text);  // Ensure correct callback with defined argument
      }
      
  }, [svgSize, words]);  // Redraw when size or words change

  return <svg ref={svgRef} />;
};

export default WordCloudComponent;



/** 
"use client";  // Explicitly mark as a Client Component
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';


const WordCloudComponent = (props) => {
    const { words } = props
    const svgRef = useRef();

    useEffect(() => {
        const layout = cloud()
            .size([600, 600])  // Larger canvas for proper word spacing
            .words(
                words.map((word) => ({
                    text: word.text,
                    size: word.value * 2,  // Adjusted size for word prominence
                }))
            )
            .padding(5)  // Adequate padding to avoid word overlap
            .rotate(() => (Math.random() > 0.5 ? 90 : 0))  // Random rotation for variety
            .fontSize((word) => word.size)
            .on('end', draw);

        layout.start();

        function draw(words) {
            const colorScale = d3.scaleOrdinal(d3.schemeCategory10);  // Color scheme

            const svg = d3.select(svgRef.current);
            svg.selectAll("*").remove();  // Clear previous drawings
            svg
                .attr('width', layout.size()[0])
                .attr('height', layout.size()[1])
                .append('g')
                .attr('transform', 'translate(300, 300)')  // Center the cloud
                .selectAll('text')
                .data(words)
                .enter()
                .append('text')
                .style('font-family', 'sans-serif')
                .style('font-size', (d) => `${d.size}px`)
                .style('fill', (d) => colorScale(d.text))  // Color scale based on word
                .attr('text-anchor', 'middle')
                .attr('transform', (d) => `translate(${d.x}, ${d.y}) rotate(${d.rotate})`)
                .text((d) => d.text);
          }
    }, [words]);

    return <svg ref={svgRef} />;
};

export default WordCloudComponent;

*/




