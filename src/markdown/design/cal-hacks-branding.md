---
path: "/design/cal-hacks-branding"
title: "Cal Hacks Branding"
date: "2018-07-12T17:12:33.962Z"
featuredImage: ./scaled.png
---

[Cal Hacks](https://calhacks.io) is a nonprofit organization composed of students passionate about fostering a culture of hacking, entrepreneurship, and social good via the empowerment of technology. Our claim to fame is throwing the world’s largest collegiate hackathon every fall. As our team’s designer, I utilize design as a tool for progressing our team's initiatives and the causes that inspire me.

A cohesive visual identity defines the voice of an organization. The Cal Hacks brand was previously defined by annual designs corresponding to each hackathon iteration. As we’ve matured from a startup-like environment into an established organization, our influence in the realm of technology extends beyond the space of hackathons into [entrepreneurship](https://calhacks.io/#initiatives), [diversity](https://calhacks.io/#initiatives), [inclusivity](https://calhacks.io/#initiatives), [and beyond](https://calhacks.io/#initiatives) — thus rendering a cohesive branding identity crucial.

![Cal Hacks Logo Scaling](./scaled.png)
![Cal Hacks Logo Text](./title.png)

## Brainstorming
The process for this rebrand was guided by my desire to communicate illustratively the defining aspects of Cal Hacks — namely our grounding in technology as a means of empowerment and our proud roots at [UC Berkeley](https://www.berkeley.edu/).  

I started off by taking inspiration from rather generic computer science-related topics — graph structures, text editor syntax, circuitry, and the like. My first attempts at a logo involved some rather cliche attempts at writing out Cal Hacks or the initials “CH” with these geeky hacker concepts.

![Logos with initials](./ch_initials.png)

After these first attempts, I was unsatisfied with the lackluster two-dimensionality of the results. These flat designs visually read to me as favicons more than the dynamic logo we needed. As such, I began playing with more with illustrative concepts to lend a bit more personality than generic programmatic idioms. I mainly wanted to incorporate a Berkeley-esque element into the logo, but without convoluting the permanent logo with our iterating annual dd0ski. As such, I decided to stay away from incorporating a bear. This left me to explore arguably the most iconic architectural element of our campus — the [Campanile](https://campanile.berkeley.edu/).

I toyed with the idea of creating outlines of the Campanile using nodes suggestive of both circuitry and tree-based data structures. These results still read as far too visually flat for my liking, however.

![Logos with nodes](./ch_nodes.png)

The Campanile has the added bonus of naturally lending itself to an isometric design — a great way of adding some dimensionality while still maintaining the flexible integrity of a flatter logo. At the time that I was mocking up some logo ideas, we were discussing many ways to integrate more hardware into Cal Hacks. We partner with [MLH](https://mlh.io/) to lend a wide range of hardware during the hackathon, and it is one of our goals to make this hardware more accessible to the heavily software-oriented crowd at Cal Hacks.

I drew much inspiration from [this great Arduino-esque logo](https://dribbble.com/shots/2267138-Hackathon), especially since I personally have a [good deal of experience](https://github.com/adrianababakanian/mo_code) with Arduino microcontrollers and IDEs (check out my robot Mo!). My first iterations based off this logo as inspiration attempted to morph the Campanile with a flat circuit board.

![Flat Hacaknile logo iteations](./ch_flat.png)

I eventually narrowed the versions down to one circuit board.

![Flat Hackanile](./flat_hackanile.png)

The resulting shape of this structure, however, was a bit awkward for a logo — I couldn’t see it fitting with inline elements or aligning well with text. As such, I rotated the campanile 90 degrees to stand upright and altered the illustration to make it slightly more three-dimensional.

And thus we have our Hackanile — Berkeley’s beloved Campanile built out of circuitry!

![Hackanile](./hackanile.png)

## Color Palette
A cohesive color palette inherently creates a unified visual identity. My choice of predominantly blue was mostly informed by the fact that we are UC Berkeley’s hackathon, and our school’s colors are proudly blue and gold. Although I made the decision to go with some form of blue, my first few iterations utilized a wide range of blues before I narrowed in on the slightly muted, monochrome palette of blues defining the final branding.

This decision to use a monochrome palette is consistent with my motivation to rebrand Cal Hacks — monochromatic color definition inherently creates visual cohesion in the same way that a permanent brand creates image cohesion. As such, I created a monochrome blue palette defined by saturated backgrounds offseting outline-defined foregrounds.

![Cal Hacks Monochrome Color Palette](./colors.png)

As much as I love the unified-yet-poppy identity given by the monochrome blues, I also recognize the need to have access to more than one color in certain contexts. ([Berkeley's branding color guideline](https://brand.berkeley.edu/colors/) does an excellent job of this, in fact.) I thus made a palette of accent colors and defined some basic combinations to inform future color palette decisions.

![Cal Hacks Extended Color Palette](./full_colors.png)

## Scalability & Sizing
Since this logo is permanent, I wanted to ensure that there is no context in which it can’t be used. As such, there are three different versions of the logo, each for different size contexts. Detail in the circuitry is eliminated as the logo scales down, and external padding added appropriately.

![Cal Hacks Logo Sizing](./sizes.png)

## Typography
My choice of typefaces was informed by the logo itself. I chose [Abadi MT Condensed Extra Bold](https://docs.microsoft.com/en-us/typography/font-list/abadi-mt-condensed#abadi-mt-condensed-extra-bold) in all-caps as our main textual logo component, as well as for headers. It’s a blocky but slender typeface that marries well with the circuited-yet-sleek build of the Hackanile, mimicking the logo’s simultaneous visual slenderness and inherent hardware.

Avenir is my personal favorite typeface (I have a soft spot for Humanist sans-serifs), but has certain limitations in web usage that makes it hard for us to utilizes as a large-scale organization. Although I use Avenir in my graphic assets, I use a combination of [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) and [Muli](https://fonts.google.com/specimen/Muli) for web. Nunito Sans serves as headers and subheaders, while Muli as all the body texts.

Nunito Sans is a display typeface available in a full set of weights, with a well-balanced distribution that anchors its endpoints to the baseline well. It's for this reason that I like using it as a bolded header in a monochrome context — it maintains its integrity even in low-contrast contexts.

(Speaking of low contrast, I [conducted some user research]() to validate my color palette for accessibility. I consider this research necessary since I acknoledge that the extremely low contrast nature of the color palette can easily result in lack of readability for many users. This research allowed me to create standards for my branding in web contexts that ensure an optimal experiences for all users.)

Muli is an almost delicate, rounded, and minimalist sans serif that contrasts well with the elongated all-caps of Abadi MT Condensed. I use it for all body text.

## Standardization & UI Kit
To ensure that this brand is used as it is intended — universally and permanently! — across Cal Hacks, I developed a UI Kit for future designers and a Sass file to be used by our tech team.

I used both of these assets myself when I made the [permanent Cal Hacks site](https://calhacks.io) and [landing page for Cal Hacks 5.0](https://2018.calhacks.io), both of which you can learn more about [here](https://calhacks.io) and [here](https://2018.calhacks.io)!

## Brand Extensions
The standardization of our visual image extended to my branding campaigns across our Cal Hacks initiatives. The purpose of the branding campaign is to add cohesion to our visual identity, and as such I built on the established style to create sub-logos integrated with the branding guidelines.

![Cal Hacks Brand Extensions Squad](./squad.png)

#### The Cal Hacks Fellowship
We rolled out our new initiative for entrepreneurial hackers, the [Cal Hacks Fellowship](https://calhacks.io/#initiatives), during Cal Hacks 4.0 and mentored our first round of Fellows throughout the following spring. I wanted to create a standalone logo for the Fellowship that would still mesh well with its parent brand. As such, I developed the logo in conjunction with our Hackanile.

![Cal Hacks Fellowship](./fellowship.png)

My reasons for choosing a rocket were twofold — the launching of a rocket perfectly captures the spirit of ideational acceleration and incubation embraced by our fellowship, and it’s also the favorite emoji of Aakash, our fellowship program lead! I thus iterated on the rocket idea until resulting in the final version, a circuit-inspired rocketship matching in visual style with the Hackanile yet still able to serve as a logo on its own.

#### CubStart
[CubStart](https://calhacks.io/#initiatives) is a beginner hacker program that helps make hackathons less intimidating and more accessible for everyone. We provide a mentorship program for team building, ideation, basic hackathon skills, and technical workshops for those with little or no CS experience to try out hackathons and coding.

Seeing that CubStart encourages growth and development, I wanted to integrate an organic element into the program's logo. The final product is a plant sprouting from a circuited building block.

![Cal Hacks CubStart Logo](./cubstart.png)

#### Cal Hacks 5.0
What better time to solidify our new brand than at our fifth-year-anniversary hackathon! The 5.0 ddoski is a merge of the traditionally huggable bear logo expected at each Cal Hacks and the new
