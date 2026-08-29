/**
 * Chronicles of Aethelgard - Item Database Registry
 */

window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Items = window.Aethelgard.Items || {};
window.Aethelgard.Items.ItemDatabase = (function () {
  const catalog = new Map();

  function init() {
    if (window.Aethelgard.Data && window.Aethelgard.Data.Items) {
      for (const item of window.Aethelgard.Data.Items) {
        catalog.set(item.id, item);
      }
    }
  }

  return {
    init,
    getItem(id) {
      if (catalog.size === 0) init();
      return catalog.get(id) || null;
    },
    getAll() {
      if (catalog.size === 0) init();
      return Array.from(catalog.values());
    }
  };
})();

