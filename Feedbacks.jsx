import {SectionFeed, DivImage, Imagemfeed,DivForm,H1Div, FormContainer,Label, DivInput, Input,InputU,InputT,DivInputT,DivInputU, Button } from "../Styles/Feedbacks"
import imgFeedb from "../../images/imgFeedb.png"

const Form = () => {
  
  return (
    <>
   <SectionFeed>
    <DivImage>
       <Imagemfeed src={imgFeedb}/>
    </DivImage>
    <DivForm>
    <H1Div>Compartilhe conosco seu feedback!</H1Div>

    <FormContainer>

       <Label for="name">
        Nome Completo:
        </Label>
        <Input
          type="text"
          name="name"
          placeholder="Digite seu nome..."
        />
        <DivInput>
        <DivInputU>
        <Label for="unidade">
        Unidade:
        </Label>
        <InputU
          type="text"
          name="unidade"
          placeholder=""
          
          
        />
        </DivInputU>
        <DivInputT>
        <Label for="turma">
        Turma:
        </Label>
        <InputT
          type="Number"
          name="turma"
          placeholder=""
          
          
        />
        </DivInputT>
        </DivInput>


        <Label for="message">
        Deixe sua sugestão:
        </Label>
        <Input
          as="textarea"
          name="message"
          placeholder=""
          rows="4"
          
          
        />
        <Button type="submit">Enviar</Button>
    </FormContainer>
    </DivForm>
    </SectionFeed>
    </>
  );
};

export default Form;


