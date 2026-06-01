const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('percoAPI', {
  getAll:  (filtre)      => ipcRenderer.invoke('perco:getAll', filtre),
  add:     (data)        => ipcRenderer.invoke('perco:add', data),
  update:  (id, data)    => ipcRenderer.invoke('perco:update', { id, data }),
  delete:  (id)          => ipcRenderer.invoke('perco:delete', id),
});

contextBridge.exposeInMainWorld('recolteAPI', {
  log:    (data) => ipcRenderer.invoke('recolte:log', data),
  getAll: ()     => ipcRenderer.invoke('recolte:getAll'),
  delete: (id)   => ipcRenderer.invoke('recolte:delete', id),
});

contextBridge.exposeInMainWorld('seasonAPI', {
  list: () => ipcRenderer.invoke('season:list'),
  create: payload => ipcRenderer.invoke('season:create', payload),
  delete: id => ipcRenderer.invoke('season:delete', id),
});

contextBridge.exposeInMainWorld('widgetAPI', {
  getState: () => ipcRenderer.invoke('widget:getState'),
  open: () => ipcRenderer.invoke('widget:open'),
  close: () => ipcRenderer.invoke('widget:close'),
  toggle: () => ipcRenderer.invoke('widget:toggle'),
  minimize: () => ipcRenderer.invoke('widget:minimize'),
  closeSelf: () => ipcRenderer.invoke('widget:closeSelf'),
  onStateChanged: callback => {
    const listener = (_event, state) => callback(state);
    ipcRenderer.on('widget:state-changed', listener);
    return () => ipcRenderer.removeListener('widget:state-changed', listener);
  },
});

contextBridge.exposeInMainWorld('authAPI', {
  getSession: () => ipcRenderer.invoke('auth:getSession'),
  login: () => ipcRenderer.invoke('auth:login'),
  logout: () => ipcRenderer.invoke('auth:logout'),
  onSessionChanged: callback => {
    const listener = (_event, session) => callback(session);
    ipcRenderer.on('auth:session-changed', listener);
    return () => ipcRenderer.removeListener('auth:session-changed', listener);
  },
});

contextBridge.exposeInMainWorld('setupAPI', {
  getConfig: () => ipcRenderer.invoke('setup:getConfig'),
  saveConfig: payload => ipcRenderer.invoke('setup:saveConfig', payload),
});

contextBridge.exposeInMainWorld('syncAPI', {
  onDataChanged: callback => {
    const listener = (_event, payload) => callback(payload);
    ipcRenderer.on('data:changed', listener);
    return () => ipcRenderer.removeListener('data:changed', listener);
  },
});
