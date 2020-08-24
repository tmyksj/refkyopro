# AtCoder Beginner Contest 115
## B - Christmas Eve Eve
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int sum = 0, max = 0;
    for (int i = 0; i < n; i++) {
        int p;
        cin >> p;

        if (max < p) {
            sum += max;
            max = p;
        } else {
            sum += p;
        }
    }

    sum += max / 2;
    cout << sum << endl;
}
```
