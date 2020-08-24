# AtCoder Beginner Contest 064
## B - Traveling AtCoDeer Problem
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int a_min = 1000, a_max = 0;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;
        a_min = min(a_min, a);
        a_max = max(a_max, a);
    }

    cout << a_max - a_min << endl;
}
```
