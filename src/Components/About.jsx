import styled from "styled-components";

const TeamSection = styled.section`
  padding: 50px 0;
  box-sizing: border-box;
  text-align: center;
  background: #262626;
  font-family: "Playfair Display", serif;
  color: #ffffff;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 48px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 20px;
  margin: 30px 0;
  padding: 0 20px;
`;

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px;
  text-align: center;
`;

const TeamMember = styled.div`
  position: relative;
  width: calc(20% - 20px);
  min-height: 250px;
  background: #ffffff;
  margin: 0 10px;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    width: calc(25% - 20px);
  }

  @media (max-width: 900px) {
    width: calc(33.33% - 20px);
  }

  @media (max-width: 600px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 400px) {
    width: 100%;
    margin: 0;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const Details = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  box-sizing: border-box;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  opacity: 0;

  ${TeamMember}:hover & {
    transform: translateY(0);
    opacity: 1;
  }

  p {
    margin: 0;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
  }
`;

const teamMembers = [
  { name: "Harshit Nayan", image: "../../public/Harshit.png" },
  { name: "Palak Khemchandani", image: "../../public/Palak.jpeg" },
  { name: "Saumilya Gupta", image: "../../public/Saumilya.jpeg" },
  { name: "Ritigya Gupta", image: "../../public/Ritigya.jpeg" },
  { name: "Shashvat Singh", image: "../../public/Shashvat.jpeg" },
];

const AboutUs = () => {
  return (
    <TeamSection>
      <Container>
        <div className="py-20">
          <Title>Our Team</Title>
          <Description>
            Our hackathon project focuses on promoting safe and ethical garbage
            disposal through the use of advanced machine learning technology.
            We've developed a system that employs a ML model trained on diverse
            garbage datasets to accurately identify and tag different types of
            waste.
            <br />
            <br />
            Use Case: Identify individuals who are littering by detecting and
            tagging them in real-time. This feature can be integrated with
            municipal systems to issue fines, thereby encouraging responsible
            behavior and maintaining cleaner public spaces. By integrating this
            system into waste management practices, we aim to create a cleaner,
            more sustainable environment and promote civic responsibility.
          </Description>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamMember key={index}>
                <ImageBox>
                  <img src={member.image} alt={`Team Member ${index + 1}`} />
                </ImageBox>
                <Details>
                  <p>{member.name}</p>
                </Details>
              </TeamMember>
            ))}
          </TeamGrid>
        </div>
      </Container>
    </TeamSection>
  );
};

export default AboutUs;
