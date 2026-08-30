I used CSS Flexbox to create a multi‑column layout for the main content sections.
The parent container (.beach-container) uses display: flex, flex-direction: row,
and gap to evenly space the items.

Each child section (.beach-card) uses flex: 1 so the columns grow and shrink
proportionally. This creates a clear multi‑column layout at desktop sizes and
demonstrates intentional use of Flexbox.

---

1. Issue: Missing form label  
   Element Affected: Email input field  
   What WAVE Reported: “Form control does not have a label.”  
   Why it matters: Screen‑reader users hear “edit text” with no context, so they
   cannot tell what the field is for.

2. Issue: Low color contrast  
   Element Affected: Navigation links (light purple on light background)  
   What WAVE Reported: “Contrast error: foreground/background contrast ratio too low.”  
   Why it matters: Low‑vision users may struggle to read the links, especially
   in bright environments.

3. Issue: Missing alt text  
   Element Affected: Collage image under “About Me”  
   What WAVE Reported: “Image missing alternative text.”  
   Why it matters: Screen‑reader users receive no information about the image,
   making the content inaccessible.
