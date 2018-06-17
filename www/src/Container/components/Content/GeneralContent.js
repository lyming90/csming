import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { triggerRedirection } from '../redux/actions';
import Header from './Header';
import './style.css';
import PropTypes from 'prop-types';

const shouldBeReplacedByRealDatabase = {
  home: {
    header: 'Home',
    content:
      <div>
        <p className='upsize'>Hi! My name is 刘明宇 (Liu Mingyu - in which Liu is my surname). I am a rising junior at Nanyang Technological University with a major in Computer Science and a possible minor in Mathematics.</p>
        <p className='upsize'>I am a self-driven and curious person who always look forward to new adventures and embrace latest technologies. I aim to design and create software solutions that are high-quality, robust and beautifully-presented. Besides my interest in Computer Science, I also enjoy traveling and hiking.</p>
      </div>
    ,
  },
  resume: {
    header: 'Resume',
    content: 
      <div>
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
  },
  posts: {
    header: 'Posts',
    content: 
      <div><p className='upsize'>Deep down, we’ve always suspected that Father’s Day isn’t a real holiday. We’ve known all along that there was no Roman feast to honor the paterfamilias or Mayan bloodletting ceremonies to appease the man of the hut. Gut instinct alone tells us the day was cooked up by the greeting card and golf shirt cartels to help move product.
      
      Turns out, we were right.
      
      Father’s Day was proposed by a woman named Sonora Smart Dodd in 1909 to honor her father, a Civil War veteran and widower who raised six children on his own. Ministers in Spokane, Washington, where Dodd lived, gave sermons honoring dads on the third Sunday in June. But no one really cared — even Dodd lost interest for a few years. Father’s Day didn’t begin to catch on until the 1930s, when, according to historian Leigh Eric Schmidt, various associations of menswear retailers, dry-goods merchants, clothiers, furnishers, and tobacco distributors banded together to form the National Council for the Promotion of Father’s Day. The council wanted to make Father’s Day a “Second Christmas…for the sales of men’s wear gifts.” Mother’s Day had been a national holiday since 1914, and the various business associations figured it was high time they cashed in. Nevertheless, Dad’s Day didn’t garner enough support to become official until 1972, when Nixon signed it into law.
      
      As a kid, I didn’t care about Father’s Day, because it was just another day that wasn’t about me. As an adult, and as a dad, I still don’t care about Father’s Day, because it’s still just another day that isn’t about me.
      
      Spring term at the college where I teach ends in mid-June, with graduation taking place the following Sunday. Instead of brunching or playing golf, I typically spend Father’s Day not only at work, but in a shirt and tie draped in a black velvet robe. Outside, beneath a plastic tent, in mid-June. Oh, the humanity.
      
      The ceremony lasts about three hours, and once it’s over, I spend a few more hours in the open sunlight fawning over my students’ newly minted diplomas and posing for pictures with their families. Father’s Day is rarely mentioned, if at all. The dads are usually more interested in cracking jokes about how the gravy train is pulling into the station or the money tree has lost its last leaf. It’s all ha-ha and wink-wink, but like all jokes, there’s a nugget of truth in there.
      
      I’ve shaken hands with hundreds of dads on Father’s Day. Over the years, I’ve observed that a lot of men measure success less in terms of their own accomplishments than in their children’s. Their kid’s graduation is a way bigger deal for a dad than Father’s Day. All the years of driving to sports practices, shelling out for music lessons, and conferencing with teachers was for this: seeing their kid through college. Confirmation that their son or daughter could stand on their own.
      
      It’s possible I’m projecting. The night I graduated from college, on my way to a party, my dad opened his wallet and handed me a $10 bill. The gesture shocked the ever-loving bejeezus out of me. My father never doled out cash. The money, however, came with a few warnings. Now that I’d graduated, I had a month to live at home, look for a job, and save money. After that, I needed to “get gone.” To further encourage me to fend for myself, he forbade my stepmom from grocery shopping. By the last week, my parents were eating out for every meal, and the kitchen cupboards were down to a bag of flour and a box of tabouleh wheat salad, which, in desperation, I ate. But the day I moved out, my dad came running down the driveway with the camera to take my picture in front of my car. He was more proud on that day than the day he watched me cross the stage in my cap and gown. I had my first apartment and my first full-time job. His job, at last, was finished.
      
      Of course, a father’s job is never finished. My dad is still the one I call for advice, even into my forties; he’s still the one I turn to when I need someone to tell me the truth in the least varnished terms. And so many of his lessons have stayed with me. I still eat the cupboards bare before going to the store. I’ll eat baked beans on lasagna noodles and corn mixed with bacon. I learned by accident that a dollop of sriracha sauce and a bread-and-butter pickle atop a corn chip is a totally boss snack. Seriously, try it.
      
      Last Father’s Day, I came home with my sweat-drenched velvet robe under my arm to find my two sons sitting around a bowl of semi-defrosted frozen blueberries. The boys had dug them out of the basement freezer, where they’d been since the previous September. My wife was at the grocery store, and the only other edible things in the house were the condiments in the refrigerator door. They went at the bowl of berries like two dogs fighting over a steak.
      
      “Dad,” my older son said when I walked in, “you’ve gotta try this.”
      
      “I’m good,” I said.
      
      “Seriously,” my younger son said, chewing. He lifted the spoon to his brother’s gaping mouth. “This is the best thing I’ve ever had in my life.”
      
      I’d never felt so honored.
      </p>
      </div>
  },
  contact: {
    header: 'Contact',
    content: 
      <div>
        <p>
          Email: lyming90@gmail.com
        </p>
        <p>
          Facebook: mingyuliu1916
        </p>
      </div>
  },
}

class GeneralContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '',
      content: '',
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pageName !== this.props.pageName) {
      const pagePath = shouldBeReplacedByRealDatabase[this.props.pageName];

      const header = pagePath
        ? pagePath.header
        : '404 Not Found';
      const content = pagePath
        ? pagePath.content
        : <p>Heartily sorry.</p>;
      
      this.setState({
        header: header,
        content: content,
      });
      console.log("Page updated.");
    }
  }

  componentDidMount() {
    const pagePath = shouldBeReplacedByRealDatabase[this.props.pageName];

    const header = pagePath
      ? pagePath.header
      : '404 Not Found';
    const content = pagePath
      ? pagePath.content
      : <p>Heartily sorry.</p>;
    
    this.setState({
      header: header,
      content: content,
    });
    console.log("Page loaded.");
  }

  render () {
    const redirect = this.props.redirect;
    if (redirect) {
      this.props.triggerRedirection();
      const redirectTo = this.props.pageName;
      console.log("A redirection is triggered, to ", redirectTo);
      return <Redirect push to={'/' + redirectTo} />
    }

    return (
      <div className='content'>
        <Header Text={this.state.header} />
        <div>{this.state.content}</div>
      </div>
    );
  }
};

GeneralContent.propTypes = {
  pageName: PropTypes.string,
}

const mapStateToProps = (state) => {
  return { 
    redirect: state.redirect,
    pageName: state.pageName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerRedirection: () => dispatch(triggerRedirection())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralContent);