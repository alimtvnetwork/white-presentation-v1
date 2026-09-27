# 19-Interactive Builder & Universal Slide System Specification

## 1. Executive Summary & Architecture Overview
This specification codifies the interactive visual slide authoring engine, full-canvas multi-theme matrix, dynamic control docking, in-place canvas mutation, and multi-format presentation export capabilities for the White Presentation Platform.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   White Presentation Core Platform                     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       ▼                            ▼                            ▼
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│  Theme Matrix    │      │ In-Place Canvas  │      │ Floating Builder │
│  - True Dark     │      │ - Direct Editing │      │ - Draggable      │
│  - Pure White    │      │ - Item Placement │      │ - Minimizable    │
│  - WP Purple     │      │ - Layer Stacking │      │ - Layer Control  │
│  - Emerald Green │      │ - Camera Zoom    │      │ - Icon/Media Lib │
└──────────────────┘      └──────────────────┘      └──────────────────┘
       │                            │                            │
       └────────────────────────────┼────────────────────────────┘
                                    │
                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │ Multi-Target Export Engine:                             │
       │ • Structured PowerPoint (.pptx XML payload)             │
       │ • JSON Presentation Deck Schema                         │
       │ • AI Prompt Spec (Instant LLM Slide Regeneration)       │
       └─────────────────────────────────────────────────────────┘
```

---

## 2. User Request (Verbatim)

```text
https://prnt.sc/XTunnafVyHHn

Hi there. The first part of the task is not bad, I must say. It's first iteration, and in the first iteration, you did a good job. It's not bad. Couple of pointers. First of all, when we go into the full screen mode, the first home section of the slider, as I do see, the image does not look good. Okay? When we go into the builder mode, we should be able to modify the text in place. The right side control is fine. The builder control, we should be able to move around, drag around, can minimize it, expand it, close it as well. Okay? Remember this. Now, for the theme part, you just have the themes. That just changes a little bit of color, nothing else. For the themes, you need to have the dark theme, white theme, all of these. Okay? I really do like how you have presented the stuff. But also in the controller section, I cannot move the controller. I can choose the controller to be on top, left-hand side, right-hand side. The slider numbers can be center, again, right-hand side, anywhere. We should be able to move it or position it. So you should look into the global PPT, how they have done it. That's one thing. So you should have the dark ways to put it there. And also you should have this type of presentation more. And I don't appreciate this type of thing, like keynote presentation, these above balls or pills, I really do not appreciate. Okay? You try to remove this. So we should have a section, like in the left side, we have the text, subtext, and the right-hand side, we can have image, text, or items to put. Okay? And the pages can be different. So this type of white, it could be in dark shape, like the Rise of Asia slides, BSRM slides. You can get many more slide options. So you don't have the slide options. You just have one or two slides, which is good, but I think we need to have more options. And do not put Alim as the founder, just put chief software engineer everywhere you put it. So correct that everywhere. So again, the company information, people can correct for their company. Okay? And this is a sample site. I do appreciate, but what we want is a slide system. That means people can come here, people can register, people can have some of the flavor from the flat slide system. So that has lots of them. There is a before/after image, that has a dark theme, that has steps slide, which we don't have yet. So I believe you can have it. So left-hand side, there'll be text, and then right-hand side, there'll be steps coming in, nice animation, great animation, animations with sound, without sound. So all kinds of options we can have. We can create new slide. We can do all sorts of things. So these are the things these are missing. Also, you need to look into the camera aspects. The camera can be added. The presentation can be exported. Lot of factors are there in the button and builder mode. You can just look into the global PPT. I think you'll look into this, and you'll find a lot of options, how the builder mode and the button moves around, how it interacts. These type of things, I think, if you do that, then it would be an excellent thing. Currently, it's kind of missing as I do see. Okay? So if you make it, it would be lovely, and try to have the PowerPoint presentation. That means I could click on and create any types of presentation very easily. I could also export things for AI. Single slide, I could export with an instruction for AI to output the things how they wanted to, where they would place the stuff, how they would visualize it, things like that. And also, I should be able to move around the items if I wanted to. So these type of things we need to have. This is kind of missing from the builder. That means we should be able to move around, place around on top of another. We should be able to control the layers. We can add new images, icons, change the root icons, all sorts of options I want. These are big things. So that's what I was saying. You need to have the spec, more detail, more depth. Okay, currently, it's just white. I really like it, appreciate it, but also, we need the dark theme. We need to have the different color of whole theme, like the lettering color or purple color theme from the WP exam. We also have the green theme, which you can have, like the whole thing would be in terms of green. Rather than just keeping whole white, try to have a shading based on the theme. Okay? Different types of thing. A little bit of dot-dot somewhere. So many more ways you can actually think of these slides, which is kind of missing. First attempt, good. I must say good, but you need to work a lot more into this. So before you do, I think you need to make a big plan by how many slides you're going to add, how many slides color, how the themes is going to react, how you're going to put the builder button there, how you are going to make the camera set up, the animation, moving of the camera, builder button drop, drag and drop, drop deleted, in place modification, layers on top of it, changing the icon, adding image, changing image, all sorts of things. I want that. Okay? Many more things are missing. You just need to focus on it.
```

---

## 3. Visual Reference Artifact
- Evaluated Screenshot: ![Feedback Screenshot](../../../assets/screenshots/white-presentation-feedback-02.png)
- **Key Visual Finding:** The right-hand hero graphic on slide 1 features baked-in text that visually collides with the left-hand live editorial DOM text. It must be replaced with a clean photo plate or clean SVG gradient mesh.
