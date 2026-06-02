import React, { useRef, useEffect, useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

import {
  Menu,
  ChevronLeft,
  BookOpen,
  Monitor,
} from '../icons';

import $U from '../styles/_.utils';
import style from '../styles/Draggable';

export default observer(({ handlers }) => {
  const dragging = useRef(false);
  const startY = useRef(0);
  const startTop = useRef(0);
  const elRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    dragging.current = true;
    startY.current = e.clientY;
    startTop.current = elRef.current?.offsetTop || 0;
    setIsDragging(true);
    e.preventDefault();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging.current) return;
      const delta = e.clientY - startY.current;
      if (elRef.current) {
        elRef.current.style.top = `${startTop.current + delta}px`;
      }
    };

    const handleMouseUp = () => {
      dragging.current = false;
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={elRef}
      className={cx(style.draggable, isDragging && style.dragging)}
    >
      <button
        className={cx($U.button, style.dragButton)}
        onMouseDown={handleMouseDown}
      >
        <Menu size={16} className={cx(style.icon, style.dragIcon)} />
      </button>
      <button
        className={cx($U.button, style.btn)}
        onClick={handlers.handleOnOpenTools}
        title="Open Tools"
      >
        <ChevronLeft size={14} className={style.icon} />
      </button>
      <button
        className={cx($U.button, style.btn)}
        onClick={handlers.handleOpenInWindow}
        title="Open in new Window"
      >
        <Monitor size={14} className={style.icon} />
      </button>
      <button
        className={cx($U.button, style.btn)}
        onClick={handlers.handleOnOpenDoc}
        title="Open Documentation"
      >
        <BookOpen size={14} className={style.icon} />
      </button>
    </div>
  );
});
