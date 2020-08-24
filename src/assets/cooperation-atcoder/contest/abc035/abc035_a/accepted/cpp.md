# AtCoder Beginner Contest 035
## A - テレビ
```cpp
#include <iostream>

using namespace std;

int main() {
    int w, h;
    cin >> w >> h;

    if (w / 4 * 3 == h) {
        cout << "4:3" << endl;
    } else {
        cout << "16:9" << endl;
    }
}
```
