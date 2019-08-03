reponses = {
    visiting: {
        yes: {
            convo: "Oh wow! Great! I know this super under the radar Thai place I saw on a Thrillist article. Wanna go this week for dinner?"
        },
        maybe: {
            convo: "What? Making up your mind about me?"
        },
        what: {
            convo: "Oh? Do you not like Thai? There's an acai place we could do instead?"
        }
    }
}
export default data = {
    1: {
        character: "barista",
        convo: "Hi! Welcome to Good Bean. Would you like to try the latte of the month?",
        repsonses: {
            yes: {
                convo: "Great, that'll be $9.75. We only accept Apple Pay though. Just swipe and take a seat, we'll have your drink right out to you.",
            },
            no: {
                convo: "Oh...uh...well, what do you want?",
                next: 2
            },
            maybe: {
                convo: "Trust me you want it. It's only $9.75. Take a seat. We'll bring it out to you."
            },
            what: {
                convo: "Well, it's an almond milk double shot espresso with filtered pumpkin spice and the essence of nutmeg, but no real nutmeg whatsoever. Trust me, you want it. Take a seat, and we'll bring it out to you.",
            }
        }
    },
    2: {
        character: "tessa",
        convo: "Are you a black coffee guy? I know it. This place has the best black coffee. Thow black coffees, please. Just add almond milk and three sugars to one, please. Here's my rewards card, thanks. Don't worry about the cost - I know people here. Hey, would you want to sit with me?",
        responses: {
            yes: {
                convo: "Great! I just threw my satchel on this table.",
                next: 3
            },
            maybe: {
                convo: "You're so funny. C'mon, my satchel is over here.",
                next: 3
            },
            what: {
                convo: "Uhm, I just thought you might want to sit at the same table since I bought your drink. C'mon, I don't bite.",
                next: 3
            }
        }
    },
    3: {
        character: "tessa",
        convo: "Hey! Tables are full, but you can join me. I've been trying to branch outside of my usual group of friends lately. My name's Tessa. What's yours?",
        responses: {
            yes: {
                convo: "Oh. Hhm, okay then. Nice to meet you.",
                next: 4
            },
            no: {
                convo: "A man of mystery! I like it. * winks *",
                next: 4
            },
            maybe: {
                convo: "Oh? It's like that, I see * winks *",
                next: 4
            },
            what: {
                convo: "I asked your name?",
                next: 4
            }
        }
    },
    4: {
        character: "tessa",
        convo: "It's so cool that we met like this - though I guess a coffee shop is a bit cliche´. But at least this is one of the good ones - they still do a pean pour over. I come here all the time. I live just a couple blocks await. Are you from here?",
        yes: {
            convo: "Oh cool! Sad I haven't seen you before. Hopefully that won't be the case from now on  * hehe *."
        },
        no: {
            next: 5
        },
        maybe: {
            convo: "Oh you're a nomad, huh? Kinda hot. Tell me more."
        },
        what: {
            convo: "Yeah, good point, what does \"from here\" even mean. I've only been here two years but it's just my kinda city, ya know? It's, like, the people."
        }
    },
    5: {
        character: "tessa",
        convo: "Oh just visiting? I'd be happy to show you around then. Would you like that?"
    },
    6: {
        character: "tessa",
        convo: "You're great to talk to. Would you, like, want to get dinner sometime?",
    }
}