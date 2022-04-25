import React from "react";
import BlogSection from "./BlogSection";

const BlogMain = () => {
  return (
    <div className="blog-main">
      <div className="user-info">
        <img src="/assets/imgs/blog-user.jpeg" alt="user-img" />

        <div className="main">
          <div className="name fs-15 text-light-2">baljis</div>
          <div className="date fs-15 text-light-2">
            Nov 11, 2021 • 5 min read{" "}
          </div>
        </div>
      </div>

      <div className="blog-img mt-4">
        <img src="/assets/imgs/blog-1.jpg" className="w-100" alt="blog-img" />
      </div>

      <BlogSection>
        <p className="blog-desc mt-3">
          Writing a book is a commitment for reader and writer alike. So in the
          event you're deciding whether to make that commitment, here's a
          minimum description length-motivated summary of the key concepts
          behind the Network State. We'll do the one sentence, one page, and one
          thousand word versions. For the ten page version, read chapter one.
          And for the one hundred-plus-page version, read the whole thing.
        </p>
      </BlogSection>

      <BlogSection title="One sentence">
        <p>
          A network state is a social network with an agreed-upon leader, an
          integrated cryptocurrency, a definite purpose, a sense of national
          consciousness, and a plan to crowdfund territory.
        </p>
      </BlogSection>

      <BlogSection title="One sentence">
        <p>
          Technology has allowed us to start new companies, new communities, and
          new currencies. But can we use it to create new cities, or even new
          countries? A key concept is to go cloud first, land last — but not
          land never — by starting with an online community and then
          materializing it into the physical world. We get there in five steps:
        </p>

        <ol>
          <li>
            Found the community. First, we need a founder. Anyone can found a
            network state, just like anyone can found a tech company or a
            cryptocurrency. The legitimacy of this founder comes from whether
            people opt to follow them. That is, there's no formal qualification
            for the role. Unlike the US president, a network state founder need
            not be part of the tiny fraction of the world born in America, above
            a certain age, or anything like that. Instead, the qualification for
            this job is wholly empirical: the founder must build an online
            community that's motivated enough to create a new state.
          </li>
          <li>
            Form a network union. Given a sufficiently dedicated online
            community, the next step is to organize the group as a network
            union, the predecessor to a network state. Unlike a traditional
            social network, a network union has a purpose: it coordinates daily
            actions for the benefit of its members, and is capable of collective
            bargaining with states and corporations alike.
          </li>
          <li>
            Build trust online and offline. We now begin holding in-person
            meetups in the physical world, of increasing scale and duration,
            while simultaneously building an internal economy using
            cryptocurrency.
          </li>
          <li>
            Crowdfund the nodes of the network state. Eventually, once
            sufficient trust has been built, we start crowdfunding apartments,
            houses, and even towns (1, 2, 3) to bring digital citizens into the
            physical world within real co-living communities. These are the
            nodes of the network state, where we use web3 login and mixed
            reality to seamlessly link the online and offline.
          </li>
          <li>
            Digitally connect physical communities. Finally, we network the
            nodes into a new kind of state: a network state, a digital
            archipelago with pieces of territory distributed around the world,
            ranging from single-person apartments to in-person communities of
            arbitrary size.
          </li>
        </ol>

        <p>
          The overall concept is to populate the land from the cloud, and to do
          so all over the earth. The physical footprint of a network state thus
          looks more like a decentralized diaspora than a traditional
          centralized country, while in the digital realm the citizens of a
          network state are far more aligned than the polarized citizens of
          legacy states. As the population and economy of a network state grow
          comparable to that of a legacy state, it will gradually be able to
          attain diplomatic recognition from existing sovereigns — and
          ultimately the UN — just as Bitcoin has now become a bona-fide
          national currency.
        </p>
      </BlogSection>

      <BlogSection title="One thousand words">
        <p>
          e begin with premises. Technology, cryptocurrency, China, India, and
          Asia more generally are on the rise. America and the West writ broadly
          are in relative decline from an economic, military, demographic, and
          political standpoint. There are many exceptions to these broad trends
          — there are positive developments at the state and city level in the
          US, as well as in pockets of Europe, and the rise of innovation in
          bits has not yet fully unlocked innovation in atoms — but broadly
          speaking our future appears to be a centralized East and a
          decentralized West.
        </p>
        <p className="my-5">
          What should that decentralized West ultimately look like?
        </p>
        <p>
          Not the current age of anarcho-tyranny, best exemplified by the city
          of San Francisco, wherein the anarchy of unpunished public stabbings
          is combined with the tyranny of unlimited parking tickets. That model
          may well be exported to much of the West before it reaches its
          end-of-life, but fundamentally the state capacity of modern America is
          just too low to maintain said tyranny for long.
        </p>
        <p>
          Nor should it be a coming age of crypto-anarchy. In the hypothetical
          scenario where the establishment mismanages affairs to the point that
          the dollar collapses and Bitcoin replaces the US dollar as the global
          reserve currency, the American federal government's writ will hold as
          much value as its devalued currency — which is to say, none. If this
          scenario happens, we'll need a vision for shared prosperity and civil
          order that's better than the (arguably misunderstood) concept of
          Bitcoin citadels. Because even if it's mostly a joke, there are many
          societal goods you can't easily buy — like a calm walk down the street
          in a high-trust community — so Mad Max isn't a desirable long-term
          outcome for anyone, even Bitcoin Maximalists.
        </p>
        <p>
          Neither should our future be control by a still-intact Chinese
          superstate. The CCP model is the limit case of digital centralization,
          in which the economy and military of the world's largest country folds
          up into an all-powerful surveillance state. If America falls into a
          period of prolonged anarchy, the CCP model will prove attractive to
          many countries as a bastion of stability in a time of uncertainty.
          Without caricaturing China — it's an enormous country, with
          significant internal difference of opinion, and many accomplishments
          to be justifiably proud of — it's important to recognize that we can't
          expect an unchecked China to behave any better than the US did during
          its post-1991 period as a hyperpower. Moreover, nature abhors a
          vacuum, and a durably stateless West would eventually prove a
          playground for foreign powers, who understand that the non-aggression
          principle has always been trumped by the aggression principle.
        </p>
        <p>
          So then: if neither anarcho-tyranny, nor crypto-anarchy, nor Chinese
          control...then what? Instead, we should start building towards
          crypto-civilization. A new world where anyone can be either country
          founder or crypto-citizen, and can switch between these paths at any
          time — much as you might choose to found a company or join one as an
          employee. Where it is possible to peacefully start new countries, to
          join them as citizens, to move between them, to fold them in and spin
          them out, and to balance decentralized competition with centralized
          cooperation. Where we can use blockchains to reinvigorate liberal
          values in an increasingly illiberal time, by advancing free speech,
          free markets, equality of opportunity, privacy, voting rights, shared
          prosperity, and provably equal treatment through programmatic
          rule-of-law. And where we can rely on these liberal values as a base
          to pursue a higher collective purpose beyond entropic individualism
          alone, whether that be reaching the stars or reversing aging.
        </p>

        <p>
          The key enabling technology for this world is the concept of the
          network state: a country you can start from your computer, an
          archipelago of digitally-linked enclaves, a union of sovereign
          collectives, a community aligned around cryptographic consensus, a
          city-state in the cloud, a body based on math rather than science, a
          group organized by geodesic over geographic distance, a polity that
          prizes exit above voice, a state that recruits like a startup, a
          territory one can acquire but not conquer, a nation built from the
          internet rather than disrupted by it.
        </p>
        <p>And that is the subject of this book.</p>
      </BlogSection>
    </div>
  );
};

export default BlogMain;
