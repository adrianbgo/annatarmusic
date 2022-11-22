import React from 'react';
import { Hero, BeatStore } from '@/components/blocks';
import { Tooltip } from '@/components/atoms';
import CTA from '@/components/molecules/CTA';
import useModal from '@/hooks/useModal';
import LicensingHelp from '@/components/blocks/modals/LicensingHelp';
import FAQ, { IQuestion } from '@/components/blocks/FAQ/FAQ';

const Home = () => {
  const { isShowing, toggle } = useModal();

  const questions: Array<IQuestion> = [
    {
      title: 'Are the beats tagged when I purchase a license?',
      body: 'No, all licenses provide untagged files.',
    },
    {
      title: 'Will I own the beat when I purchase from your store?',
      body: 'No. All purchases made from the Beat Store are non-exclusive. This means that the producer still owns the rights and will be able to license it to other artists.',
    },
    {
      title: 'Which payments do you accept?',
      body: 'I currently only accept PayPal and Credit Card payments',
    },
    {
      title: 'Can I download the files directly after I make the payment?',
      body: "Yes. After you've made the payment, you will be redirected to a secure download area where you can download the files. \n\nA confirmation email will also be sent to you.",
    },
    {
      title: "I'm looking for a beat but I can't find it in your Beat Store!",
      body: 'There\'s a search bar at the top of the beat store. \n\n1. Click on "Search"\n\n2. Type in the name of the beat and wait until it shows up.\n\nIf the beat still doesn\'t show up, it might have been sold exclusively. In that case it will no longer be available.',
    },
    {
      title: 'I have a different question',
      body: 'No worries, just head over to the Contact page and drop the question to me.',
    },
  ];
  return (
    <>
      <Hero />
      <BeatStore />
      <Tooltip text="View full licensing terms" />
      <CTA
        title="Need help choosing a license?"
        linktext="Help me choose"
        subtitle="It's hard choosing a license. Click through for some help"
        function={toggle}
      />
      <LicensingHelp hide={toggle} isShowing={isShowing} />
      <FAQ questions={questions} />
    </>
  );
};

export default Home;
