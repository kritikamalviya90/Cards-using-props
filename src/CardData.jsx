const CardData = [
    {
        id: 1,
        img_src: "https://th.bing.com/th/id/OIP.w9AIOO6Cfup6aToV1E-dEQHaIr?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
        name: " C Language ",
        title: "Software Language",
        link: "https://en.wikipedia.org/wiki/C_(programming_language)",

    },
     {
        id: 2,
        img_src: "data:image/webp;base64,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",
        name: "C++",
        title: "Software Language",
        link: "https://en.wikipedia.org/wiki/C++",

    },
     {
        id: 3,
        img_src: "https://th.bing.com/th/id/OIP.PwTkFn11jp9zfFOYKmaEkgHaHa?w=141&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        name: "python",
        title: "Software Language",
        link: "https://en.wikipedia.org/wiki/Python_(programming_language)",

    },
     {
        id: 4,
        img_src: "data:image/webp;base64,UklGRqIEAABXRUJQVlA4IJYEAABQHQCdASq9AMsAPp1Ook0lpKMiIbQI4LATiWdu4XSb3bifLHf2iI24PQltnPMB5rfo53kveb8iUt7oy/zHkd3vyveCvGj305kLPH9VewV0lQ3fJ+T8n5Pyfk/J+T8n5Pyfk/J+T8n5PyfABdq2JMyBLUcOm4AK1W8jRGPDqO1sStyRN1Y8S2BPdGmAhkUCvmnBnBmDS4rfaidHEoCnD/2zBnniHbwO4Ywcss+rbJ4cnYwObSUoPw/xFEFivT7TM7NtoVaUb/7eCEryb4nnXvNvnhlvCT0+N71NMgT6MQHXDpuTcm5Nybk3JuTcm5Nybk3JqAAA/v9V0AAE5+wj+H/jE4uNJFs4gXNb97pP9KW/Fx5pn6CLED7veXrhlHfQJsi54UjRLAI/82yjvuB8WRefnO0cQTq3enEFbDOkamtAls8i1vo5AGAQNqEWUxsNGnxgkJNGYMi1rPY63MWDATL4MswrPfZjNPR9p9t5Ke5s8nF9Z0JltJv8JHUg0p7FHubJuw0Mojk3lo2PJLlp3DVn3cf4nJU2V33BuoPAyhX7eO6cRfbipaLlxtMwnwTKeafY59zkJd4IN8HHpAVDsEe7y1CtlO7PYMWa/4W0frnp52I1LO6lEEU54t2d94UiLrW9AV3xir0DLJYzKbtuegfFc+End6Jpbha4WA+VEla3vVbzPH9a3Vk77wDYDg3ngemufOuBNNHWjvbrXU+TBxazr+Bo1jON28L/wfCeT50pmAUYUCgEXIP8Jo1djelwdtX/iCCXG6DctXlh+t/XU2CVmCTr6eZAurzKX1uIFBKNwatys/r6RUAwoDBZFp5IMqmPQfADLYgQ0l2wewVuhS92VbaSHnCA7fymF6d2Dwhz3Tix2dmsTga5/wE9h8l8DSpZzOpZGKrdZ0heG6ExeuM/rgBx6XH0J01vwLlVm/D48QmtKYfruxx9QcRrb0/fjdtGPhUCVIphMt8GADkahlOI6gsG9Km2hnk6B/ePmsL5obzNqkPGJbYzDiEtUpSOada+/vWlUe9zjiiYLv+AY0vaaxn4wUaJufhirRRBOi+MhWe3mfY0Jfu8JmSxEpfZ/zsjXP5SY37e5g1fV/VvR8XR4TD/8DrBVmpywIwNSeLs+UzfHj3sbpMREDQf9PqN4yIJrg0PxOx9KuAfoR8l/Q9pH8G/+TMTwJ9R1Ya/+E+of4xJ+6MkuVvmKWPj03jnD1srgenqUVlefpybzgzJabdoU/l2zVc9wkgPbb2e7QZuE60ueGD/lOZ5RMZUDAvi6q3bcTBgxUcQ8Rfu89o6I9NcE+NKn++owOQUFOxWXbyVdjcbjHNMCipBM1v8vUvEauzKPi8iyKPbmD+Fklwx2ko6h+cHCFWhTUdXKpmgRk9CrBldN4REBTEN/75BbJOzYFbBnGHJgG0lbVWZqfbDBqLpJIBmN9TTH7uc5x+TfsVYlli5UYjG6aMn394IDIIDWqippDFRmFlN7N3sVPWID+MUjAhzWYGbUZBm4I7Eg4RIL+d7gJE+IADf/nGL0/m8El/GjGkMymDloo9iad3fPpElkAAAAAAA",
        name: "MySQL",
        title: "Software Language",
        link: "https://en.wikipedia.org/wiki/MySQL",

    },
     {
        id: 5,
        img_src: "https://th.bing.com/th?q=React+Logo+Icon+PNG&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247",
        name: "React",
        title: "Software Language",
        link: "https://en.wikipedia.org/wiki/React_(software)",

    },
     {
        id: 6,
        img_src: "https://th.bing.com/th/id/OIP.SkooUso_1PdBuoXOzBNAYwHaHa?r=0&pid=ImgDet&w=178&h=178&c=7&cb=idpwebp2&o=7&rm=3",
        name: "CSS",
        title: "Software Language",
        link: "https://en.wikipedia.org/wiki/CSS",

    },
     {
        id: 7,
        img_src: "https://ts4.mm.bing.net/th?id=OIP.9zN9M5IW0FwVUWiO-xOoMAHaHa&pid=15.1",
        name: "Node js",
        title: "Software Language",
        link: "https://en.wikipedia.org/wiki/Node.js",

    },
     {
        id: 8,
        img_src: "https://ts2.mm.bing.net/th?id=OIP.lt9WI3J34Khu2UxzAe_QnQHaER&pid=15.1",
        name: "Express js",
        title: "Software Language",
        link: "https://en.wikipedia.org/wiki/Express.js",

    },
    
     {
        id: 9,
        img_src: "https://th.bing.com/th?q=MongoDB+Logo.png+HD&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247",
        name: "Mongo DB",
        title: "Software Language",
        link: "https://en.wikipedia.org/wiki/MongoDB",

    }
    
   ]

export default  CardData;