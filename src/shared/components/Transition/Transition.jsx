import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Transition.scss';

export function Transition({ showIt, setShowIt, children }) {
  const nodeRef = useRef(null);

  useEffect(() => {
    setShowIt(true);
  }, [setShowIt]);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={showIt}
      timeout={1000}
      unmountOnExit
      classNames="transition"
    >
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
}

export function TransitionOnClick({ showIt, setShowIt, children }) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={showIt}
      timeout={1000}
      unmountOnExit
      classNames="transition"
    >
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
}

// Добавь в файл стейт, как на 29 строке, передай пропсами в Transition как на 31.
//  const [showIt, setShowIt] = useState(false);

// Это то что будет у тебя в render:
// <Transition showIt={showIt} setShowIt={setShowIt}>
//   <div>Im transitioned compoonent</div>
// </Transition>;
