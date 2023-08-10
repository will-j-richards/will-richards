---
tags: work
title: Flexible census data
client: Office for National Statistics
cover-img: '/media/getdata-cover.png'
layout: layouts/article.njk
date: 2022-01-01
work-examples:
  - img: "../media/getdata-flexibledataset.png"
    alt: "Flexible datasets integrated into ons.gov.uk/datasets"
  - img: "../media/getdata-taskmodel.png"
    alt: "A task model developed in Miro to map out get census data user journeys"
  - img: "../media/getdata-userjourneys.png"
    alt: "User journeys were formalised in Miro and presented to stakeholders"
  - img: "../media/getdata-customdataset.png"
    alt: "Create a custom dataset on ons.gov.uk/datasets/create"
summary: A new publishing service for Census 2021 data
---


<div class="main-img">
  <figure>
    {% assign example = work-examples[0] %}
    {% myImage example.img example.alt 'example-img' %}
  <figcaption>
    Flexible datasets integrated into <a href="https://www.ons.gov.uk/datasets/RM031/editions/2021/versions/1" aria-label="ons.gov.uk/datasets">ons.gov.uk/datasets</a>
  </figcaption>
  </figure>
</div>
<h2 class="article-content">
  Overview
</h2>
<p class="article-content">
    The Office for National Statistics (ONS) previously used a manual process to protect data confidentiality in census publications. They created hundreds of datasets manually for different combinations of variables and specific geographical levels like local authorities or electoral wards. In smaller areas where data disclosure was a concern, the ONS chose not to publish data for the entire region. This was mainly a problem in rural areas with small populations, but it was less of an issue in urban areas. Unfortunately, there was no system to address this, so users had to request customised tables from the ONS, leading to increased friction and costs for the user and the organisation. 
</p>
<p class="article-content">
    A new service was proposed offering a flexible way to access census data. Using Cantabular, backend software created by the <a href="https://sensiblecode.io/" aria-label="Sensible Code Company">Sensible Code Company</a>. The goal was to develop a set of tools that enabled users to search the data with their chosen variables.
</p>  
<h2 class="article-content">
  Challenges
</h2>
<p class="article-content">
    The main challenges were to seamlessly integrate the system and user experience into the web architecture of ons.gov.uk, while also ensuring that users received adequate signposting and assistance in case they encountered statistical disclosure.
</p>
<h2 class="article-content">
  Mapping out a new service
</h2>
<p class="article-content">
    I lead a discovery in collaboration with a user researcher, facilitating workshops with stakeholders and conducting research sessions with potential users. Through this process, we identified the key user needs and potential pain points.
</p>
<div class="main-img">
  <figure>
    {% assign example = work-examples[1] %}
    {% myImage example.img example.alt 'example-img' 'taskmodel' %}
  <figcaption>
      A task model developed in <a href="https://miro.com/app/board/uXjVMKugJEw=/" aria-label="Miro">Miro</a> to map out get census data user journeys
  </figcaption>
  </figure>
</div>
<p class="article-content" id="taskmodel">
  We mapped out user journeys using known personas within a task model. This visualisation helped us identify the various touchpoints across the website that users interacted with when they had a need for data. 
</p>
<div class="main-img">
<figure>
  {% assign example = work-examples[2] %}
  {% myImage example.img example.alt 'example-img' %}
<figcaption>
  User journeys were formalised in <a href="https://miro.com/app/board/uXjVMKugJEw=/" aria-label="Miro">Miro</a> and presented to stakeholders
</figure>
</div>
<h2 class="article-content">
  Prioritising user needs
</h2>
<p class="article-content">
    Based on the insights gathered during the discovery, we were able to identify the key user journeys. Using this information, I designed a variety of prototypes, which we then tested with users. The findings allowed us to further refine the design and prioritise user stories for development.
</p>
<div class="main-img">
  <figure>
    {% assign example = work-examples[3] %}
    {% myImage example.img example.alt 'example-img' %}
  <figcaption>
    Create a custom dataset on <a href="https://www.ons.gov.uk/datasets/create" aria-label="ons.gov.uk/datasets/create">ons.gov.uk/datasets/create</a>
  </figcaption>
  </figure>
</div>
<h2 class="article-content">
A new service is launched
</h2>
<p class="article-content">
  We made an effort to utilise components and patterns from the <a href="https://service-manual.ons.gov.uk/design-system">ONS design system</a>. However, in certain situations, we had to develop new patterns that met the necessary accessibility requirements. To ensure compliance, we had these new patterns tested by the <a href="https://digitalaccessibilitycentre.org/" aria-label="Digital Accessibility Centre">Digital Accessibility Centre</a>.
  The service is currently in Beta and is available on the ONS website. Users are able to access more than 400 published datasets and can customise the geographies or variables based on their requirements. Alternatively, they can create their own datasets by adding variables. In cases where a user's query incurs statistical disclosure control, there are clear signposts to help them improve their results. 
  Since its launch, the new service has been well received and has resulted in a reduced number of calls to Census Customer services. You can read more about <a href="https://blog.ons.gov.uk/2023/03/28/new-ways-to-access-census-2021-data/" aria-label="New ways to access Census 2021 data">New ways to access Census 2021 data</a> on the ONS website.
</p>
