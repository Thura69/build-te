import{g as p,d as s,j as t,S as c}from"./index-VQSAZRLI.js";import{M as n}from"./MemberForm-D-UraT5V.js";import{A as d}from"./AccountResponseCard-BUBYPBxy.js";import{m as i}from"./forms-iRkAx9I5.js";import{m as u}from"./inputsJoiSchema-DR80cPXO.js";import{C as f,a as x}from"./CardContent-DTrM2CnM.js";import"./InputControllers-DDt3EF8g.js";import"./TextField-D3R9oRAX.js";import"./useThemeProps-DmHRh9Bz.js";import"./index-BYV2JyI0.js";import"./getFormValues-CGQBIzk4.js";import"./useRequestErrorInputResponse-IA9b4GC1.js";import"./useSuccessMessage-CrTeqooW.js";import"./FormContainer-DscY9_xB.js";import"./InputWrappers-BNYY81Vx.js";import"./RequiredBadge-BPkPqPAE.js";import"./PostalCodeInputController-CQrCWMfS.js";import"./PatternFormatCustom-DnZ87fRv.js";import"./react-number-format.es-DoWa0wzu.js";import"./BpCheckbox-DAGCBt5E.js";const g={header:"仮登録完了",texts:["下記のメールアドレス宛に本登録のご案内を送信しました。","メールに記載されている認証用URLをクリックして本登録を行ってください。"],guide:{title:"メールが届かない場合",steps:["・迷惑メールフォルダに振り分けられていないかご確認ください","・メールアドレスが誤っていた場合、正しいメールアドレスで新規会員登録を　行なってください"]},repeatButtonText:"メールを再送する"};function T(){const[r,{isLoading:e,isSuccess:o}]=p(),[m,a]=s.useState(!1);return s.useEffect(()=>{o&&a(!0)},[o]),t.jsx(f,{sx:{maxWidth:"624px",width:"100%",border:"1px solid",borderColor:"neutralAccent.main"},children:t.jsx(x,{size:"large",children:t.jsx(c,{gap:6,children:m?t.jsx(d,{form:i,responses:g,isLoading:e,repeatAction:r}):t.jsx(n,{userSpecific:!1,form:i,formSchema:u,query:r,isLoading:e})})})})}export{T as default};
