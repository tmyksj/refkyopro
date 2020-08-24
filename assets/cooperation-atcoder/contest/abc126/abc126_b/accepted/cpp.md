# AtCoder Beginner Contest 126
## B - YYMM or MMYY
```cpp
#include <iostream>

using namespace std;

int main() {
    int date;
    cin >> date;

    bool yymm = 1 <= date % 100 && date % 100 <= 12;
    bool mmyy = 1 <= date / 100 && date / 100 <= 12;

    if (yymm && mmyy) {
        cout << "AMBIGUOUS" << endl;
    } else if (yymm) {
        cout << "YYMM" << endl;
    } else if (mmyy) {
        cout << "MMYY" << endl;
    } else {
        cout << "NA" << endl;
    }
}
```
