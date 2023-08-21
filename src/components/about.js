function About({paragraph}){
    console.log(paragraph.words)
    return (
      <div id="about">
        <h2>{paragraph.words}</h2>
      </div>
    );
  }

export default About