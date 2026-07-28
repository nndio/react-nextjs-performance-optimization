export function useList() {
  const list = [
    {
      id: '1',
      title: 'Cookies'
    },
    {
      id: '2',
      title: 'Apples'
    },
    {
      id: '3',
      title: 'Nuts'
    }
  ];

  /** Создать новый элемент. */
  const createItem = () => {};

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */
  const setItemTitle = (id, title) => {};

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id) => {};

  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */
  const deleteItem = (id) => {};

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}