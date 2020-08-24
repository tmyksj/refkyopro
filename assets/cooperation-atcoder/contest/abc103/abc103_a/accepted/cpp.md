# AtCoder Beginner Contest 103
## A - Task Scheduling Problem
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int a[3];
    cin >> a[0] >> a[1] >> a[2];

    int b[] = { abs(a[0] - a[1]), abs(a[1] - a[2]), abs(a[2] - a[0]) };
    sort(b, b + 3);

    cout << b[0] + b[1] << endl;
}
```
