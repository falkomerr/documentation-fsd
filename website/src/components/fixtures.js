
import React from "react";
import { 
  LoginOutlined,
  FileProtectOutlined,
  EyeOutlined,
  BlockOutlined,
  ApiOutlined,
  LikeOutlined,
  BuildOutlined,
} from '@ant-design/icons';

export const featureList = [
    {
      title: 'Явная бизнес-логика',
      Svg: EyeOutlined,
      description: (
        <>
          <p>Модули распределяются согласно <b>скоупу влияния, бизнес-ответственности и техническому назначению</b></p>
  
          <p>Благодаря этому <i>архитектура стандартизируется и становится более простой для ознакомления</i></p>
        </>
      ),
    },
    {
      title: 'Адаптация к новым условиям',
      Svg: LoginOutlined,
      description: (
        <>
          <p>Каждый компонент архитектуры имеет свое назначение и не влияет на другие</p>
  
          <p>Благодаря этому под новые требования можно независимо модифицировать функциональность приложения без непредвиденных последствий</p>
        </>
      ),
    },
    {
      title: 'Техдолг и рефакторинг',
      Svg: FileProtectOutlined,
      description: (
        <>
          <p>Каждый модуль является независимым и самодостаточным</p>
  
          <p>Благодаря этому можно переписать его с нуля без неожиданных сайд-эффектов</p>
        </>
      ),
    },
    {
      title: 'Контролируемое переиспользование логики',
      Svg: BuildOutlined,
      description: (
        <>
          <p>Каждый модуль имеет свои ограничения и рекоммендации на переиспользуемость согласно своему слою</p>
  
          <p>Благодаря этому сохраняется баланс между соблюдением принципа DRY и возможности кастомизировать логику модуля без оверхедных переопределений</p>
        </>
      ),
    },
  ];

  
export const conceptsList = [
  {
    title: 'Public API',
    Svg: ApiOutlined,
    description: (
      <>
        Каждый модуль должен иметь на верхнем уровне декларацию <b>своего публичного API</b>
      </>
    ),
  },
  {
    title: 'Isolation',
    Svg: BlockOutlined,
    description: (
      <>
        Модуль не должен <b>зависеть напрямую</b> от других модулей того же слоя или вышележаших слоев
      </>
    ),
  },
  {
    title: 'Needs driven',
    Svg: LikeOutlined,
    description: (
      <>
        Ориентирование <b>на потребности бизнеса и пользователя</b>
      </>
    ),
  },
];
