---
tags: work
title: Please Switch On Your Mobile Phones
client: Digital R&D Fund for the Arts in Wales
cover-img: '/media/psoymp-cover.png'
layout: layouts/article.njk
date: 2023-01-01
work-examples:
  - img: "../media/psoymp-stage.png"
    alt: "Rehearsals and testing the system"
  - img: "../media/psoymp-rehearsals.png"
    alt: "Early concepts"
  - img: "../media/choreographic-system.png"
    alt: "Front stage flow of the choreographic system"
  - img: "../media/psoymp-mobile.png"
    alt: "The UI for the mobile web application was simplified"
  - img: "../media/psoymp-online.png"
    alt: "The UI enablining an online audience to particpate in the performance"
summary: Empowering the audience as collaborators and co-creators
---


<div class="main-img-noborder">
    {% assign example = work-examples[0] %}
    {% myImage example.img example.alt 'example-img' %}
</div>

<h2 class="article-content">
  Overview
</h2>
<p class="article-content">
    The project was a collaboration between <a href="https://taikabox.com" aria-label="TaikaBox">TaikaBox</a> and Moon, the latter I co-founded as the creative director. Collectively we submitted a tender to the <a href="https://www.nesta.org.uk/project/digital-innovation-fund-arts-wales/" aria-label="Digital R&D Fund for the Arts in Wales">Digital R&D Fund for the Arts in Wales</a>, supported by Nesta, the Arts & Humanities Research Council and publicly funded by the National Lottery through the Arts Council of Wales. 
</p> 
<p class="article-content">
    The primary objective of the research was to create a digital choreographic system that allowed two different audience types to engage and collaborate in real-time performances.
</p> 

<p class="article-content">
    <strong>The audience types were as follows:</strong>
</p> 
<ul class="article-list">
    <li>A theatre audience using a mobile phone or a compatible connected device.</li> 
    <li>An online audience using a desktop computer, laptop, or tablet.</li> 
</ul>

<p class="article-content">
    The research lasted approximately one year, with four test performances at various theatre locations across Wales. 
</p>

<h2 class="article-content">
    Web-based browser vs. native app
</h2>

<p class="article-content">
    Initially, we discussed developing a native application; however, considering the following factors, we decided to develop a web application:
</p>
<ul class="article-list">
    <li>The plethora of mobile devices on the market.</li> 
    <li>The advantageous time frame and ease of prototyping in HTML and Javascript.</li> 
    <li>The potential requirement for the audience to download a mobile app, which would introduce friction to the user experience.</li>
</ul>
<h2 class="article-content">
    Learning to embrace failure
</h2>

<p class="article-content">
    As designers and technologists we wanted to push technology to make the experience interactive, whilst our partners aims were to create a engaging and credible performance. 
</p>

<div class="main-img-noborder">
    {% assign example = work-examples[1] %}
    {% myImage example.img example.alt 'example-img' %}
</div>

<p class="article-content">
    Our first research session took place at Sherman Cymru in Cardiff. The performance involved a large audience in a mid-scale theatre with up to 25 dancers on stage. Feedback from the event was polarised, with some audience members disliking it while others enjoying it. The majority perceived the experience as bewildering, a feeling compounded by the sheer volume of activity on stage and the complexity of the digital experience. Technical issues and audience expectations further contributed to this.
</p>
<h2 class="article-content">
    Use technology to solve problems
</h2> 
<p class="article-content">
    Based on the audience feedback, we went back to the drawing board. While the performance may have failed to address the original problem, we learned valuable lessons. The most obvious, use technology to solve problems, not create them. 
</p>
<p class="article-content">
    <strong>Based on the feedback, we decided to focus on two things:</strong>
</p> 
<ul class="article-list">
    <li>Audience collaboration</li> 
    <li>The purity of the performance</li> 
</ul>
<div class="main-img-noborder">
  <figure>
    {% assign example = work-examples[2] %}
    {% myImage example.img example.alt 'example-img' %}
    <figcaption>
        Front stage flow of the choreographic system post audience feedback
    </figcaption>
  </figure>
</div>
<ol class="article-list">
    <li>Before the performance begins, the audience is invited to log onto the website and submit a story. </li> 
    <li>Stories that pass moderation are projected onto the big screen at the back of the stage. Using their phones, the audience can vote for their favorite stories.</li>
    <li>The choreographer and dancers then take the most popular story and start to work on simple vignettes.</li>
    <li>The audience is invited to vote on certain characteristics, such as choosing dancers, determining the pace of the performance, or shaping the movements.</li>
    <li>The choreographer invites the audience to vote on whether a story development should continue. If the audience decides to move on, the process starts again.</li> 
</ol>
<div class="main-img">
  <figure>
    {% assign example = work-examples[3] %}
    {% myImage example.img example.alt 'example-img' %}
    <figcaption>
        The UI for the mobile web application was simplified
    </figcaption>
  </figure>
</div>
<p class="article-content">
    The third test took place at Aberystwyth University and involved a smaller audience. An open dialogue with the audience and performers was established. The mobile device became a useful tool to facilitate ideas and capture feedback. This approach demystified the on-stage activities, while still engaging the audience as collaborators and co-creators.
</p> 
<p class="article-content">
    The final test at Y Fwrness, Llanelli, involved streaming the performance online. A simple user UI was developed, enabling the online audience to: 
</p>
<ul class="article-list">
    <li>Contribute and vote on stories</li> 
    <li>Watch a live video feed</li> 
    <li>Vote on the development of each performance</li>
</ul>
<p class="article-content">
    Importantly, a 20-30 second latency was identified and built into the performance, allowing online participants time to participate. 
</p>
<div class="main-img-noborder">
  <figure>
    {% assign example = work-examples[4] %}
    {% myImage example.img example.alt 'example-img' %}
    <figcaption>
      The UI enabling an online audience to particpate in the performance
    </figcaption>
  </figure>
</div>
<h2 class="article-content">
    Conclusion
</h2> 
<p class="article-content">
    While we simplified the overall concept following our initial failings, the subsequent performances proved to be highly successful. From our initial failures, we demonstrated the ability to use technology to increase audience engagement. As a result, Taika Box continues to incorporate the system into its work today.
</p>
