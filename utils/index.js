export const day = () => {
    const num = new Date().getDay();
    switch(num) {
        case 1:
            return 'Mon'
            break;
        case 2: 
            return 'Tue'
            break;
        case 3:
            return 'Wed'
            break;
        case 4: 
            return 'Thu'
            break;
        case 5:
            return 'Fri'
            break;
        case 6: 
            return 'Sat'
            break;
        case 0: 
            return 'Sun'
            break;
    }
   }

   export const dayIndex = (day) => {
       switch(day) {
        case 'Mon':
            return 0
            break;
        case 'Tue':
            return 1
            break;
        case 'Wed': 
            return 2
            break;
        case 'Thu':
            return 3
            break;
        case 'Fri':
            return 4
            break;
        case 'Sat':
            return 5
            break;
        case 'Sun':
            return 6   
       }
   }