import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Transition.scss';

export function Transition({ showIt, setShowIt, type, children }) {
  const nodeRef = useRef(null);

  useEffect(() => {
    setShowIt(true);
  }, [setShowIt]);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={showIt}
      timeout={500}
      unmountOnExit
      classNames={type}
    >
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
}

export function TransitionOnClick({ showIt, type, children }) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={showIt}
      timeout={500}
      unmountOnExit
      classNames={type}
    >
      <div className="transition-wrapper" ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
}

// Добавь в файл стейт и передай пропсами в Transition. Если TransitionOnClick
// то setShowIt не нужен, изменяй его самостоятельно в своем родительском компоненте
//  const [showIt, setShowIt] = useState(false);

// Это то что будет у тебя в render:
// <Transition showIt={showIt} setShowIt={setShowIt}>
//   <div>Im transitioned compoonent</div>
// </Transition>;

Transition.propTypes = {
  showIt: PropTypes.bool.isRequired,
  setShowIt: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

TransitionOnClick.propTypes = {
  showIt: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
