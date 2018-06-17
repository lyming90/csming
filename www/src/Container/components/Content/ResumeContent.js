import React from 'react';
import Header from './Header';
import './style.css';

const ResumeContent = (props) => {
  return (
    <div className='resume-content'>
      <Header Text='Resume' />
      <p>This will be my resume!</p>
			<p>Please make a prettier & longer version!</p>
      <h1>Education</h1>
			<p>Currently a rising junior at Nanyang Technological University, Singapore.</p>
			<p>In the past, I went to the University of Waterloo for one term.</p>
			<line-break />
			<h1>Experience</h1>
			<p><strong>Software Engineer Intern</strong><br/><span className='small'>May 2018 - Present<br/>Sea (Shopee), Singapore</span></p>
			<p><strong>Peer Coach</strong><br/><span className='small'>Sept - Nov 2018<br/>SCSE-NTU, Singapore</span></p>
			<p><strong>Teaching Assistant</strong><br/><span className='small'>Feb - Apr 2017<br/>Saturday Kids, Singapore</span></p>
			<line-break />
			<h1>Skill Set</h1>
			<p>For programming languagues, I know Java, Python, C, SQL, NoSQL, HTML, CSS, JavaScript.</p>
			<p>For frameworks and libraries, I have used JavaFX, Python-Flask, OpenCV, Nginx, Gunicorn, ReactJS, Redux, jQuery.</p>
			<p>As for tools, I played with Git, LaTeX, Markdown, Firebase, MySQL.</p>
		</div>
  );
};

export default ResumeContent;