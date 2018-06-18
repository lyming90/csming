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
      <p>It was late in the evening of August 16th, 1971, and twenty-two-year-old Douglas Korpi, a slim, short-statured Berkeley graduate with a mop of pale, shaggy hair, was locked in a dark closet in the basement of the Stanford psychology department, naked beneath a thin white smock bearing the number 8612, screaming his head off.

      “I mean, Jesus Christ, I’m burning up inside!” he yelled, kicking furiously at the door. “Don’t you know? I want to get out! This is all fucked up inside! I can’t stand another night! I just can’t take it anymore!”

      It was a defining moment in what has become perhaps the best-known psychology study of all time. Whether you learned about Philip Zimbardo’s famous “Stanford Prison Experiment” in an introductory psych class or just absorbed it from the cultural ether, you’ve probably heard the basic story.

      Zimbardo, a young Stanford psychology professor, built a mock jail in the basement of Jordan Hall and stocked it with nine “prisoners,” and nine “guards,” all male, college-age respondents to a newspaper ad who were assigned their roles at random and paid a generous daily wage to participate. The senior prison “staff” consisted of Zimbardo himself and a handful of his students.

      The study was supposed to last for two weeks, but after Zimbardo’s girlfriend stopped by six days in and witnessed the conditions in the “Stanford County Jail,” she convinced him to shut it down. Since then, the tale of guards run amok and terrified prisoners breaking down one by one has become world-famous, a cultural touchstone that’s been the subject of books, documentaries, and feature films — even an episode of Veronica Mars.

      The SPE is often used to teach the lesson that our behavior is profoundly affected by the social roles and situations in which we find ourselves. But its deeper, more disturbing implication is that we all have a wellspring of potential sadism lurking within us, waiting to be tapped by circumstance. It has been invoked to explain the massacre at My Lai during the Vietnam War, the Armenian genocide, and the horrors of the Holocaust. And the ultimate symbol of the agony that man helplessly inflicts on his brother is Korpi’s famous breakdown, set off after only 36 hours by the cruelty of his peers.

      There’s just one problem: Korpi’s breakdown was a sham.

      “Anybody who is a clinician would know that I was faking,” he told me last summer, in the first extensive interview he has granted in years. “If you listen to the tape, it’s not subtle. I’m not that good at acting. I mean, I think I do a fairly good job, but I’m more hysterical than psychotic.”

      Now a forensic psychologist himself, Korpi told me his dramatic performance in the SPE was indeed inspired by fear, but not of abusive guards. Instead, he was worried about failing to get into grad school.

      “The reason I took the job was that I thought I’d have every day to sit around by myself and study for my GREs,” Korpi explained of the Graduate Record Exams often used to determine admissions, adding that he was scheduled to take the test just after the study concluded. Shortly after the experiment began, he asked for his study books. The prison staff refused. The next day Korpi asked again. No dice. At that point he decided there was, as he put it to me, “no point to this job.” First, Korpi tried faking a stomach-ache. When that didn’t work, he tried faking a breakdown. Far from feeling traumatized, he added, he had actually enjoyed himself for much of his short tenure in the jail, other than a tussle with the guards over his bed.

      “[The first day] was really fun,” Korpi recalled. “The rebellion was fun. There were no repercussions. We knew [the guards] couldn’t hurt us, they couldn’t hit us. They were white college kids just like us, so it was a very safe situation. It was just a job. If you listen to the tape, you can hear it in my voice: I have a great job. I get to yell and scream and act all hysterical. I get to act like a prisoner. I was being a good employee. It was a great time.”

      For Korpi, the most frightening thing about the experiment was being told that, regardless of his desire to quit, he truly did not have the power to leave.

      “I was entirely shocked,” he said. “I mean, it was one thing to pick me up in a cop car and put me in a smock. But they’re really escalating the game by saying that I can’t leave. They’re stepping to a new level. I was just like, ‘Oh my God.’ That was my feeling.”

      Another prisoner, Richard Yacco, recalled being stunned on the experiment’s second day after asking a staff-member how to quit and learning that he couldn’t. A third prisoner, Clay Ramsay, was so dismayed on discovering that he was trapped that he started a hunger strike. “I regarded it as a real prison because [in order to get out], you had to do something that made them worry about their liability,” Ramsay told me.

      When I spoke to Zimbardo this past May about Korpi’s and Yacco’s claims, he initially denied that they were obligated to stay.

      “It’s a lie,” he said. “That’s a lie.”

      But it is no longer just a question of Zimbardo’s word against theirs. This past April, a French academic and filmmaker named Thibault Le Texier published Histoire d’un Mensonge [History of a Lie], plumbing newly-released documents from Zimbardo’s archives at Stanford University to tell a dramatically different story of the experiment. After Zimbardo told me that Korpi and Yacco’s accusations were baseless, I read him a transcript unearthed by Le Texier of a taped conversation between Zimbardo and his staff on day three of the simulation: “An interesting thing was that the guys who came in yesterday, the two guys who came in and said they wanted to leave, and I said no,” Zimbardo told his staff. “There are only two conditions under which you can leave, medical help or psychiatric… I think they really believed they can’t get out.”

      “Now, okay,” Zimbardo corrected himself on the phone with me. He then acknowledged that the informed consent forms which subjects signed had included an explicit safe phrase: “I quit the experiment.” Only that precise phrase would trigger their release.

      “None of them said that,” Zimbardo said. “They said, ‘I want out. I want a doctor. I want my mother,’ etc., etc. Essentially I was saying, ‘You have to say, “I quit the experiment.”’”

      But the informed consent forms that Zimbardo’s subjects signed, which are available online from Zimbardo’s own website, contain no mention of the phrase “I quit the experiment.”

      Zimbardo’s standard narrative of the Stanford prison experiment offers the prisoners’ emotional responses as proof of how powerfully affected they were by the guards’ mistreatment. The shock of real imprisonment provides a simpler and far less groundbreaking explanation. It may also have had legal implications, should prisoners have thought to pursue them. Korpi told me that the greatest regret of his life was failing to sue Zimbardo.

      “Why didn’t we file false imprisonment charges?” Korpi asked during an interview. “It’s embarrassing! We should have done something!”

      According to James Cahan, former Deputy District Attorney for Stanford University’s Santa Clara County, Korpi may well have had a case: the six hours or so after Korpi made his desire to quit the experiment plain, much of which he spent confined in the closet, appear to have met the statutory requirements for false imprisonment in California.

      “If he says, ‘I don’t want to do this anymore. I want to talk to you about getting out,’” Cahan said, “and he’s then locked in a room, and he is at some point trying to or asking to get out of that room in order to communicate as a contract employee or whatever he is, and he is unable to get out of that room, then that would seem to get very close to being out of the realm of informed consent and into the realm of a violation of the penal code.”


      While Zimbardo likes to begin the story of the Stanford prison experiment on Sunday, August 15th, 1971, when guards began harassing newly arrived prisoners at the “Stanford County Jail” — making it sound as if they became abusive of their own accord — a more honest telling begins a day earlier, with the orientation meeting for the guards. There, addressing the group less as experimental subjects than as collaborators, Zimbardo put a thumb on the scales, clearly indicating to the guards that their role was to help induce the desired prisoner mindset of powerlessness and fear.

      “We cannot physically abuse or torture them,” Zimbardo told them, in recordings first released a decade and a half after the experiment. “We can create boredom. We can create a sense of frustration. We can create fear in them, to some degree… We have total power in the situation. They have none.”


      Much of the meeting was conducted by David Jaffe, the undergraduate student serving as “Warden,” whose foundational contribution to the experiment Zimbardo has long underplayed. Jaffe and a few fellow students had actually cooked up the idea of a simulated prison themselves three months earlier, in response to an open-ended assignment in an undergraduate class taught by Zimbardo. Jaffe cast some of his dormmates in Toyon Hall as prisoners and some as guards and came up with 15 draconian prison rules for his guards to enforce, including “Prisoners must address each other by number only,” “Prisoners must never refer to their condition as an ‘experiment’ or a ‘simulation,” and “Failure to obey any of the above rules may result in punishment.” Zimbardo was so taken with the tears and drama produced by Jaffe’s two-day simulation that he decided to try it himself, this time randomly assigning guards and prisoners and dragging the action on much longer. Because Zimbardo himself had never visited a real prison, the standards of realism were defined by Jaffe’s prison research and the nightmarish recollections of Carlo Prescott, a San Quentin parolee whom Zimbardo met through Jaffe and brought in as a consultant. Jaffe was given extraordinary leeway in shaping the Stanford prison experiment in order to replicate his previous results. “Dr. Zimbardo suggested that the most difficult problem would be to get the guards to behave like guards,” Jaffe wrote in a post-experiment evaluation. “I was asked to suggest tactics based on my previous experience as master sadist. … I was given the responsibility of trying to elicit ‘tough-guard’ behavior.” Though Zimbardo has often stated that the guards devised their own rules, in fact most of them were copied directly from Jaffe’s class assignment during that Saturday orientation meeting. Jaffe also offered the guards ideas for hassling the prisoners, including forcing them to clean thorns out of dirty blankets that had been thrown in the weeds.

      Once the simulation got underway, Jaffe explicitly corrected guards who weren’t acting tough enough, fostering exactly the pathological behavior that Zimbardo would later claim had arisen organically.

      “The guards have to know that every guard is going to be what we call a tough guard,” Jaffe told one such guard [skip to 8:35]. “[H]opefully what will come out of this study is some very serious recommendations for reform… so that we can get on the media and into the press with it, and say ‘Now look at what this is really about.’ … [T]ry and react as you picture the pigs reacting.”

      Though most guards gave lackluster performances, some even going out of their way to do small favors for the prisoners, one in particular rose to the challenge: Dave Eshelman, whom prisoners nicknamed “John Wayne” for his Southern accent and inventive cruelty. But Eshelman, who had studied acting throughout high school and college, has always admitted that his accent was just as fake as Korpi’s breakdown. His overarching goal, as he told me in an interview, was simply to help the experiment succeed.

      “I took it as a kind of an improv exercise,” Eshelman said. “I believed that I was doing what the researchers wanted me to do, and I thought I’d do it better than anybody else by creating this despicable guard persona. I’d never been to the South, but I used a southern accent, which I got from Cool Hand Luke.”

      Eshelman expressed regret to me for the way he mistreated prisoners, adding that at times he was calling on his own experience undergoing a brutal fraternity hazing a few months earlier. “I took it just way over the top,” he said. But Zimbardo and his staff seemed to approve. After the experiment ended, Zimbardo singled him out and thanked him.

      “As I was walking down the hall,” Eshelman recalled, “he made it a point to come and let me know what a great job I’d done. I actually felt like I had accomplished something good because I had contributed in some way to the understanding of human nature.”

      According to Alex Haslam and Stephen Reicher, psychologists who co-directed an attempted replication of the Stanford prison experiment in Great Britain in 2001, a critical factor in making people commit atrocities is a leader assuring them that they are acting in the service of a higher moral cause with which they identify — for instance, scientific progress or prison reform. We have been taught that guards abused prisoners in the Stanford prison experiment because of the power of their roles, but Haslam and Reicher argue that their behavior arose instead from their identification with the experimenters, which Jaffe and Zimbardo encouraged at every turn. Eshelman, who described himself on an intake questionnaire as a “scientist at heart,” may have identified more powerfully than anyone, but Jaffe himself put it well in his self-evaluation: “I am startled by the ease with which I could turn off my sensitivity and concern for others for ‘a good cause.’”


      From the beginning, Zimbardo sought a high media profile for his experiment, allowing KRON, a San Francisco television station, to film his mock arrests and sending them periodic press releases as the action evolved. But Zimbardo’s prison simulation quickly garnered more press attention than he could have imagined. On August 21st, a day after the study’s premature closure, the attempt by George Jackson, radical black activist and author of the bestselling Soledad Brother, to escape from San Quentin, an hour north of Stanford, led to the deaths of three corrections officers and three inmates, including Jackson himself. In short order, KRON arranged a televised debate between Zimbardo and San Quentin’s associate warden. Three weeks later, the predominately African American prisoners at Attica State Prison in New York seized control of the facility from the nearly all-white correctional staff, demanding better treatment. Ordered by Governor Nelson Rockefeller to retake the prison by force, helicopters dumped tear gas canisters and hundreds of law-enforcement officers and armed Attica guards fired blindly into the smoke, slaughtering prisoners and hostages alike.

      In an era before the mass shootings that have since become the norm in American news headlines, it was a shocking bloodbath — one of the deadliest since the Civil War, according to the New York State Special Commission on Attica. The country scrambled for answers, and Zimbardo’s experiment appeared to offer them, putting guards and prisoners on the same moral plane — mutual victims of the carceral state — though in fact nearly all the Attica killings had been committed by guards and officers. Zimbardo’s tale of guards-run-amok and terrorized prisoners first came to national attention with a twenty-minute prime-time special on NBC. Richard Yacco told NBC’s reporter that he and other prisoners had been told they couldn’t quit, but, after he failed to hew to Zimbardo’s narrative of prisoners organically “slipping into” their roles, he was edited out of the program (the recording survives here).

      In his 1973 article in the New York Times Magazine, Zimbardo wrote unequivocally that Korpi’s breakdown was genuine. By the mid 1980s, when he asked Korpi to appear on the Phil Donahue show and in the documentary Quiet Rage, Korpi had long since made clear that he’d been faking, but Zimbardo still wanted to include the breakdown. Korpi went along with it.

      “If he wanted to say I had a mental breakdown, it seemed a minor note,” he told me. “I didn’t really object. I thought it was an exaggeration that served Phil’s purposes.”

      In Quiet Rage, Zimbardo introduced dramatic audio footage of Korpi’s “breakdown” by saying “he began to play the role of the crazy person but soon the role became too real as he went into an uncontrollable rage.” A taped segment in which Korpi admitted playacting and described how tiring it was to keep it up for so many hours was edited out. Korpi told me that Zimbardo hounded him for further media appearances long after Korpi asked him to stop, pressuring him with occasional offers of professional help.

      “We unlisted the number and [Zimbardo] figured out our unlisted number,” Korpi said. “It was just bizarre. I would always tell him, ‘I don’t want to have anything to do with the experiment anymore.’ ‘But Doug, but Doug, you’re so important! And I’ll give you lots of referrals!’ ‘Yeah, I know Phil, but I testify in court now and it’s embarrassing how I was. I don’t want to have that be a big public thing anymore.’ But Phil just couldn’t hear that I didn’t want to be involved. This went on for years.”

      (Zimbardo confirmed that he gave Korpi referrals, but declined to comment further.)

      The Stanford prison experiment established Zimbardo as perhaps the most prominent living American psychologist. He became the primary author of one of the field’s most popular and long-running textbooks, Psychology: Core Concepts, and the host of a 1990 PBS video series, Discovering Psychology, which gained wide usage in high school and college classes and is still screened today. Both featured the Stanford prison experiment. And its popularity wasn’t limited to the United States. Polish philosopher Zygmunt Bauman’s citation of the experiment in Modernity and the Holocaust in 1989 typified a growing tradition in Eastern Europe and Germany of looking to the Stanford prison experiment for help explaining the Holocaust. In his influential 1992 book, Ordinary Men, historian Christopher Browning relied on both the Stanford prison experiment and the Milgram experiment, another social psychology touchstone, in arguing that Nazi mass killings were in part the result of situational factors (other scholars argued that subscribers to a national ideology that identified Jews as enemies of the state could hardly be described as “ordinary men”). 2001, the same year Zimbardo was elected president of the American Psychological Association, saw the release of a German-language film, Das Experiment, that was based on the SPE but amped the violence up to Nazi-worthy levels, with guards not only abusing prisoners but murdering them and each other. When prisoner abuse at Abu Ghraib came to light in 2004, Zimbardo again made the rounds on the talk show circuit, arguing that the abuse had been the result not of a few “bad apple” soldiers but of a “bad barrel” and providing expert testimony on behalf of Ivan “Chip” Frederick, the staff sergeant supervising the military policemen who committed the abuses. With the resurgence of interest in the experiment, Zimbardo published The Lucifer Effect in 2007, offering more detail about it than ever before, though framed in such a way as to avoid calling his basic findings into question. The book became a national bestseller.

      All the while, however, experts had been casting doubt on Zimbardo’s work.


      Despite the Stanford prison experiment’s canonical status in intro psych classes around the country today, methodological criticism of it was swift and widespread in the years after it was conducted. Deviating from scientific protocol, Zimbardo and his students had published their first article about the experiment not in an academic journal of psychology but in The New York Times Magazine, sidestepping the usual peer review. Famed psychologist Erich Fromm, unaware that guards had been explicitly instructed to be “tough,” nonetheless opined that in light of the obvious pressures to abuse, what was most surprising about the experiment was how few guards did. “The authors believe it proves that the situation alone can within a few days transform normal people into abject, submissive individuals or into ruthless sadists,” Fromm wrote. “It seems to me that the experiment proves, if anything, rather the contrary.” Some scholars have argued that it wasn’t an experiment at all. Leon Festinger, the psychologist who pioneered the concept of cognitive dissonance, dismissed it as a “happening.”


      A steady trickle of critiques have continued to emerge over the years, expanding the attack on the experiment to more technical issues around its methodology, such as demand characteristics, ecological validity, and selection bias. In 2005, Carlo Prescott, the San Quentin parolee who consulted on the experiment’s design, published an Op-Ed in The Stanford Daily entitled “The Lie of the Stanford Prison Experiment,” revealing that many of the guards’ techniques for tormenting prisoners had been taken from his own experience at San Quentin rather than having been invented by the participants.

      In another blow to the experiment’s scientific credibility, Haslam and Reicher’s attempted replication, in which guards received no coaching and prisoners were free to quit at any time, failed to reproduce Zimbardo’s findings. Far from breaking down under escalating abuse, prisoners banded together and won extra privileges from guards, who became increasingly passive and cowed. According to Reicher, Zimbardo did not take it well when they attempted to publish their findings in the British Journal of Social Psychology.

      “We discovered that he was privately writing to editors to try to stop us getting published by claiming that we were fraudulent,” Reicher told me.

      Despite Zimbardo’s intervention, the journal decided to publish Reicher and Haslam’s article, alongside a commentary by Zimbardo in which he wrote, “I believe this alleged ‘social psychology field study’ is fraudulent and does not merit acceptance by the social psychological community in Britain, the United States or anywhere except in media psychology.”

      “Ultimately,” said Reicher, “what we discovered was that we weren’t in a scientific debate, which is what we thought we were in. We were in a commercial rivalry. At that point he was very keen on getting the Hollywood film out.”

      Zimbardo’s decades-long effort to turn his work into a feature film finally bore fruit in 2015 with The Stanford Prison Experiment, for which he served as consultant (he is played by Billy Crudup). Though the film purports to take a critical stance toward the experiment, it hews in essential ways to Zimbardo’s narrative, neglecting to include Zimbardo’s encouragement of tough tactics in the Saturday guard orientation or to mention David Jaffe’s role at all. Beleaguered by abusive guards, the character based on Korpi (Ezra Miller) succumbs to a delusion that he is not participating in an experiment at all but has been placed in a real prison and, in the emotional turning point of the film, suffers a screaming meltdown. Gradually his delusion begins to infect the other prisoners.

      Somehow, neither Prescott’s letter nor the failed replication nor the numerous academic critiques have so far lessened the grip of Zimbardo’s tale on the public imagination. The appeal of the Stanford prison experiment seems to go deeper than its scientific validity, perhaps because it tells us a story about ourselves that we desperately want to believe: that we, as individuals, cannot really be held accountable for the sometimes reprehensible things we do. As troubling as it might seem to accept Zimbardo’s fallen vision of human nature, it is also profoundly liberating. It means we’re off the hook. Our actions are determined by circumstance. Our fallibility is situational. Just as the Gospel promised to absolve us of our sins if we would only believe, the SPE offered a form of redemption tailor-made for a scientific era, and we embraced it.

      For psychology professors, the Stanford prison experiment is a reliable crowd-pleaser, typically presented with lots of vividly disturbing video footage. In introductory psychology lecture halls, often filled with students from other majors, the counterintuitive assertion that students’ own belief in their inherent goodness is flatly wrong offers dramatic proof of psychology’s ability to teach them new and surprising things about themselves. Some intro psych professors I spoke to felt that it helped instill the understanding that those who do bad things are not necessarily bad people. Others pointed to the importance of teaching students in our unusually individualistic culture that their actions are profoundly influenced by external factors.

      “Even if the science was quirky,” said Kenneth Carter, professor of psychology at Emory University and co-author of the textbook Learn Psychology, “or there was something that was wrong about the way that it was put together, I think at the end of the day, I still want students to be mindful that they may find themselves in powerful situations that could override how they might behave as an individual. That’s the story that’s bigger than the science.”

      But if Zimbardo’s work was so profoundly unscientific, how can we trust the stories it claims to tell? Many other studies, such as Soloman Asch’s famous experiment demonstrating that people will ignore the evidence of their own eyes in conforming to group judgments about line lengths, illustrate the profound effect our environments can have on us. The far more methodologically sound — but still controversial — Milgram experiment demonstrates how prone we are to obedience in certain settings. What is unique, and uniquely compelling, about Zimbardo’s narrative of the Stanford prison experiment is its suggestion that all it takes to make us enthusiastic sadists is a jumpsuit, a billy club, and the green light to dominate our fellow human beings.


      “You have a vertigo when you look into it,” Le Texier explained. “It’s like, ‘Oh my god, I could be a Nazi myself. I thought I was a good guy, and now I discover that I could be this monster.’ And in the meantime, it’s quite reassuring, because if I become a monster, it’s not because deep inside me I am the devil, it’s because of the situation. I think that’s why the experiment was so famous in Germany and Eastern Europe. You don’t feel guilty. ‘Oh, okay, it was the situation. We are all good guys. No problem. It’s just the situation made us do it.’ So it’s shocking, but at the same time it’s reassuring. I think these two messages of the experiment made it famous.”

      In surveys conducted in 2014 and 2015, Richard Griggs and Jared Bartels each found that nearly every introductory psychology textbook on the market included Zimbardo’s narrative of the experiment, most uncritically. Curious about why the field’s appointed gatekeepers, presumably well-informed about the experiment’s dubious history, would choose to include it nonetheless, I reached out. Three told me they had originally omitted the Stanford prison experiment from their first editions because of concerns about its scientific legitimacy. But even psychology professors are not immune to the forces of social influence: two added it back in under pressure from reviewers and teachers, a third because it was so much in the news after Abu Ghraib. Other authors I spoke with expressed far more critical perspectives on the experiment than appeared in their textbooks, offering an array of reasons why it nonetheless had pedagogical value.

      Greg Feist, coauthor of Psychology: Perspectives and Connections, told me that his personal view of the experiment shifted some years back after he came across the 2005 Op-Ed by Carlo Prescott, which he described as “shocking.”

      “Once I found out some of the ethical and scientific problems with the study, I didn’t think it was worth perpetuating, to be honest,” Feist said.

      But there it is in his textbook’s third edition, published in 2014: a thoroughly conventional telling of Zimbardo’s standard narrative, with brief criticisms appearing only later in the chapter.


      On October 25, 1971, a mere two months after concluding an experiment so stressful that he lost ten pounds in the span of a week, Philip Zimbardo traveled to Washington D.C. at the request of the House Committee on the Judiciary. In the hearing chamber, Zimbardo sat before the assembled Congressmen of Subcommittee 3 and told a whopper: the “guards” in his recent experiment “were simply told that they were going to go into a situation that could be serious and have perhaps some danger… They made up their own rules for maintaining law, order, and respect.” Zimbardo described a laundry list of abuses, causing “acute situational traumatic reactions” from the prisoners. Despite still never having set foot in an actual prison, he generalized freely from the unreviewed, unpublished, and largely unanalyzed results of his study: “The prison situation in our country is guaranteed to generate severe enough pathological reactions in both guards and prisoners as to debase their humanity, lower their feelings of self-worth, and make it difficult for them to be part of a society outside of their prison.” Zimbardo was a hit. As Representative Hamilton Fish, Jr. of New York put it: “You certainly helped me a great deal in clarifying some of the things we have seen the past few days and understanding them.”

      In the wake of the prison uprisings at San Quentin and Attica, Zimbardo’s message was perfectly attuned to the national zeitgeist. A critique of the criminal justice system that shunted blame away from inmates and guards alike onto a “situation” defined so vaguely as to fit almost any agenda offered a seductive lens on the day’s social ills for just about everyone. Reform-minded liberals were hungry for evidence that people who committed crimes were driven to do so by the environment they’d been born into, which played into their argument that reducing urban crime would require systemic reform — a continuation of Johnson’s “war on poverty” — rather than the “war on crime” that President Richard M. Nixon had campaigned on. “When I heard of the study,” recalls Frances Cullen, one of the preeminent criminologists of the last half century, “I just thought, ‘Well of course that’s true.’ I was uncritical. Everybody was uncritical.” In Cullen’s field, the Stanford prison experiment provided handy evidence that the prison system was fundamentally broken. “It confirmed what people already believed, which was that prisons were inherently inhumane,” he said.

      The racial dynamics of the Stanford prison experiment, which have never been adequately explored, should probably have given reformers pause. Carlo Prescott, who had just suffered sixteen years of imprisonment as an African American, played a pivotal role in shaping the architecture of the experiment. Frustrated in part by the lack of black experimental subjects, he intervened repeatedly in the action, seeking to bring, as he put it to me, “an air of authenticity to boys who were getting $15 a day to pretend to be prisoners — all Caucasian, as you recall. [Ed. note: one prisoner was Asian American.] Some of the genuine things that shock you as a result of having your liberty taken and your ass being controlled by people who hate you before you even get there.” Yet Zimbardo’s account of the “situation” that engendered abuse left race out of the equation. He often used the word “normal” to describe the participants in his study despite the fact that they were hardly a normal representation of the American inmate population at that time. Analyzing American prisoner abuse as a product of race-blind “situational forces” erased its deep roots in racial oppression.

      Nonetheless, the Stanford prison experiment came to exert a significant influence on American criminology. Zimbardo’s first academic article about his results was published in the International Journal of Criminology and Penology rather than a psychology journal. A year later, Robert Martinson, one of a team of sociologists who had been commissioned by the state of New York to evaluate various prison programs, appeared on 60 Minutes with a dark message: when it came to rehabilitation of prisoners, Martinson said, nothing worked. Almost overnight, Martinson’s “nothing works doctrine” became accepted wisdom in America. It is often cited as the cause of the widespread abandonment in the 1970s by academics and policymakers alike of the notion that a prison could be a rehabilitative environment. Cullen believes Zimbardo’s study played a role too.

      “What the Stanford Prison Experiment did,” Cullen says, “was to say: prisons are not reformable. The crux of many prison reforms, especially among academic criminologists, became that prisons were inherently inhumane, so our agenda had to be minimizing the use of prisons, emphasizing alternatives to prison, emphasizing community corrections.”

      In an era of rapidly rising crime, this agenda proved politically untenable. Instead, conservative politicians who had no qualms about using imprisonment purely to punish ushered in a decades-long “get tough” era in crime that disproportionately targeted African Americans. The incarceration rate rose steadily, standing now at five times higher than in comparable countries; one in three black men in America today will spend time in prison.

      It would, of course, be unfair to lay mass incarceration at Zimbardo’s door. It is more accurate to say that, for all its reformist ideals, the Stanford prison experiment contributed to the polarizing intellectual currents of its time. According to a 2017 survey conducted by Cullen and his colleagues Teresa Kulig and Travis Pratt, 95% of the many criminology papers that have cited the Stanford prison experiment over the years have accepted its basic message that prisons are inherently inhumane.

      “What struck me later in life was how all of us lost our scientific skepticism,” Cullen says. “We became as ideological, in our way, as the climate change deniers. Zimbardo’s and Martinson’s studies made so much intuitive sense that no one took a step back and said, ‘Well, this could be wrong.’”

      Most criminologists today agree that prisons are not, in fact, as hopeless as Zimbardo and Martinson made them out to be. Some prison programs do reliably help inmates better their lives. Though international comparisons are difficult to make, Norway’s maximum-security Halden prison, where convicted murderers wear casual clothing, receive extensive job-skill training, share meals with unarmed guards, and wander at will during daylight hours through a scenic landscape of pine trees and blueberry bushes, offers a hopeful sign. Norwegians prisoners seldom get in fights and reoffend at lower rates than anywhere else in the world. To begin to ameliorate the evils of mass incarceration, Cullen argues, will require researching what makes some forms of prison management better than others, rather than, as the Stanford prison experiment did, dismissing them all as inherently abusive.

      Meanwhile, the legacy of Zimbardo’s work goes well beyond its influence on our troubled criminal justice system, touching directly on how we understand our personal moral freedom.


      On a sunny August afternoon in 2006, at the height of the Iraq War, a nineteen-year-old U.S. Army Ranger named Alex Blum drove a superior in the Rangers and three other men to a Bank of America branch in Tacoma, where they leapt out of his car and committed an armed takeover robbery using pistols and AK-47s. Three days later, Alex, who happens to be my cousin, was arrested in our hometown of Denver, Colorado. Alex claimed to our family to have believed he had been participating in a training exercise. After the radical conditioning of the month-long Ranger Indoctrination Program he had just undergone, he had followed his superior without questioning. For Alex’s sentencing hearing, his defense team called on a prominent expert to argue that his involvement in the robbery was due not to his own free will but to powerful “situational forces”: Dr. Philip Zimbardo. Alex received an extraordinarily lenient sentence, and Dr. Zimbardo became a family hero.

      In October 2010, Zimbardo co-hosted a special episode of the Dr. Phil Show entitled When Good People Do Bad Things, using Alex’s story to spread his message that evil acts are the result of circumstance rather than character and choice. From my place in the studio audience, I heard Zimbardo describe guards abusing prisoners without any urging whatsoever — “I constrained the guards not to use any physical force, but they intuitively knew how to use psychological force,” Zimbardo said. Next he used his theories to explain the abuses at Abu Ghraib, offering up the same arguments he’d recently used to defend Ivan “Chip” Frederick. When Dr. Phil asked who in the studio audience thought they too might have tortured detainees in a similar situation, everyone in my family stood up, almost the only ones to do so. We were proud to support Alex, and we knew this was the lesson we were supposed to derive from Zimbardo’s work.


      A few years later, after deciding to write a book about Alex’s story, I discovered evidence that he hadn’t told the whole truth about his involvement. When I confronted him, he confessed to me that his choice to participate in the bank robbery was freer and more informed than he had ever let on before. Accepting responsibility was transformative for him. It freed him from the aggrieved victim mindset in which he had been trapped for years. Zimbardo’s “situational forces” excuse had once appeared to give my cousin a way to believe in his fundamental goodness despite his egregious crime, but seeing the personal growth that came with deeper moral reckoning, I began to wonder if it had really done him a service.

      It was only after interviewing Zimbardo at his home in San Francisco for my book about Alex that I began researching the history of his famous experiment in depth. The more I found, the more unsettled I became. Shortly after my book was published, having by now spoken to a number of former participants in the study, I approached Zimbardo for another interview. For months I didn’t hear back. Then Le Texier’s book was published, and Zimbardo suddenly agreed to speak to me, apparently eager to respond to the charges. We spoke by Skype shortly after his return from a psychology conference. His office was stacked high with books and papers, the phone constantly ringing in the background as we talked.

      After hearing Zimbardo describe the experiment so many times over the years, I was not expecting to hear anything new. The first surprise came when I asked about Korpi’s and Yacco’s claims to me that they had been told they couldn’t leave. After dismissing them at first as lies and then claiming that Korpi and Yacco had simply forgotten the safe phrase “I quit the experiment,” Zimbardo astonished me by acknowledging that he had in fact instructed his staff to tell prisoners they couldn’t get out.

      “If [prisoners] said, ‘I want to get out,’ and you said, ‘Okay,’ then as soon as they left, the experiment would be over,” Zimbardo explained. “All the prisoners would say, ‘I want to get out.’ There has to be a good reason now for them to get out. The mentality has to be, in their mind, ‘I am a prisoner in a prison,’ not, ‘I’m a college student in an experiment. I don’t want my money. I’m quitting the experiment.’ You don’t quit a prison. That’s the whole point of the Pirandellian prison [Ed. note: Pirandello was an Italian playwright whose plays blended fiction and reality]. At one level you’re a student in a basement in an experiment. At another level, you’re a prisoner being abused by guards in a county jail.”

      Zimbardo confirmed that David Jaffe had devised the rules with the guards, but tried to argue that he hadn’t been lying when he told Congress (and, years later, insisted to Lesley Stahl on 60 Minutes) that the guards had devised the rules themselves, on the grounds that Zimbardo himself had not been present at the time. He at first denied that the experiment had had any political motive, but after I read him an excerpt from a press release disseminated on the experiment’s second day explicitly stating that it aimed to bring awareness to the need for reform, he admitted that he had probably written it himself under pressure from Carlo Prescott, with whom he had co-taught a summer school class on the psychology of imprisonment.

      “During that course, I began to see that prisons are a waste of time, and money, and lives,” Zimbardo said. “So yes, I am a social activist, and prison reform was always important in my mind. It was not the reason to do the study.”

      At the close of a long, tense conversation, I asked him whether he thought Le Texier’s book would change the way people saw the experiment.

      “I don’t know,” he said, sounding tired. “In a sense, I don’t really care. At this point, the big problem is, I don’t want to waste any more of my time. After my talk with you, I’m not going to do any interviews about it. It’s just a waste of time. People can say whatever they want about it. It’s the most famous study in the history of psychology at this point. There’s no study that people talk about 50 years later. Ordinary people know about it. They say, ‘What do you do?’ ‘I’m a psychologist.’ It could be a cab driver in Budapest. It could be a restaurant owner in Poland. I mention I’m a psychologist, and they say, ‘Did you hear about the study?’ It’s got a life of its own now. If he wants to say it was all a hoax, that’s up to him. I’m not going to defend it anymore. The defense is its longevity.”

      Zimbardo has spent much of the last fifty years answering questions about the darkest six days of his life, in some ways a prisoner of his own experiment’s success. When I asked him if he was glad, looking back, to have conducted the study, he said he had mixed feelings. He considered the shyness clinic he founded in Palo Alto in 1975 to be his most important work.

      “If it was not for the prison study, that would be my legacy,” he said.

      “Does some part of you wish that were your legacy?” I asked.

      “Yeah, sure,” he said, “of course. That’s positive. The prison study, the negative part is I am Dr. Evil. I created this evil situation, like Svengali or something.”

      In Zimbardo’s telling, he, too, is a victim of circumstance — shaped by his surroundings like everyone else.

      “I gradually, with a lack of awareness, transformed myself into being the prison superintendent,” he said. “Why? My office had the sign ‘Prison Superintendent.’ David Jaffe’s office said ‘Warden.’ Then I had to deal with the parents. I had to deal with the parole board hearings. I had to deal with the priest coming in. People are dealing with me not as a researcher but as the prison superintendent, asking for help with their prisoner son.”

      This excuse has served Zimbardo as well as anyone over the years, but it may no longer be enough. After reviewing some of Le Texier’s evidence, textbook author Greg Feist told me he is considering taking a firmer stand in the forthcoming edition of Psychology: Perspectives and Connections.

      “I hope there does come a point, now that we know what we do, where Zimbardo’s narrative dies,” Feist said. “Unfortunately it’s not going to happen soon, but hopefully it will happen. Because I just think it’s a…”

      Feist paused, searching for the appropriate word, then settled on a simple one.

      “It is a lie.”
      </p>
      </div>
  },
  contact: {
    header: 'Contact',
    content: ''
  },
}

class Content extends Component {
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
      return <Redirect to={'/' + redirectTo} />
    }

    return (
      <div className='content'>
        <Header Text={this.state.header} />
        <div>{this.state.content}</div>
      </div>
    );
  }
};

Content.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Content);