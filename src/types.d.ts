declare type ProgressUpdate = (progress: number) => void;
declare type Face     = 'front'|'left'|'back'|'right'|'up'|'down';
declare type FaceList = ['front', 'left', 'back', 'right', 'up', 'down'];
declare type Cube<T>  = {[key in Face]: T};