import { useState } from 'react';

export function useList() {
  const [list, setList] = useState([
    {
      id: '1',
      title: 'Cookies',
      done: false,
    },
    {
      id: '2',
      title: 'Apples',
      done: false,
    },
    {
      id: '3',
      title: 'Nuts',
      done: false,
    },
  ]);

  /** Создать новый элемент. */
  const createItem = () => {
    const newItem = {
      id: String(Date.now()),
      title: '',
      done: false,
    };

    setList((prevList) => [...prevList, newItem]);
  };

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */
  const setItemTitle = (id, title) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id
          ? { ...item, title }
          : item
      )
    );
  };

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id
          ? { ...item, done: !item.done }
          : item
      )
    );
    console.log(list);
  };

  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */
  const deleteItem = (id) => {
    setList((prevList) =>
      prevList.filter((item) => item.id !== id)
    );
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}