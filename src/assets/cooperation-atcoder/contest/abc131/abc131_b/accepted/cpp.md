# AtCoder Beginner Contest 131
## B - Bite Eating
```cpp
#include <cmath>
#include <iostream>

using namespace std;

int main() {
    int n, l;
    cin >> n >> l;

    int sum = 0;
    for (int i = 1, min = abs(l); i < n; i++) {
        if (min > abs(l + i)) {
            min = abs(l + i);
            sum += l + i - 1;
        } else {
            sum += l + i;
        }
    }

    cout << sum << endl;
}
```
