# AtCoder Beginner Contest 102
## B - Maximum Difference
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int min = 1000000000, max = 1;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;
        min = (min < a ? min : a);
        max = (max > a ? max : a);
    }

    cout << (max - min) << endl;
}
```
