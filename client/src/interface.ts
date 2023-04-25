export interface FaqData {
    text:string
}

export interface FAQProps {
    data:FaqData[]
}

export interface InputProps {
    type: string,
    placeholder: string,
    source?:string,
    signStyle?:string,
    caption?:string,
    name?:string,
    value?:string,
    onchange?: any
}

export interface EventProps {
    header: string;
    text: string;
    source?: string;
  }

export interface ButtonProps {
    title: string,
    classes: string,
    source?:string,
    textStyle?:string,
    imgHeight?:string
    onClick?: any
  }

  export interface Layout {
      children: React.ReactNode;
      style?:any;
  }

  
export interface CategoryLayout{
    img:string;
    text:string;
    link?:string;
}

export interface ReviewProps {
    text: string;
    source?: string;
  }


export interface Onboarding {
    children: React.ReactNode
}

export interface LoginData {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
  }

  export interface TokenData {
    token: string
  }
